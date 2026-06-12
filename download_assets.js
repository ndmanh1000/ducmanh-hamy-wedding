const fs = require('fs');
const path = require('path');
const https = require('https');

const TARGET_URL = 'https://miuwedding.com/hoang-hai-thanh-hoai-2026-05-02';
const BASE_URL = 'https://miuwedding.com';

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${url} -> ${destPath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function main() {
  try {
    console.log(`Fetching HTML from ${TARGET_URL}...`);
    const html = await makeRequest(TARGET_URL);
    
    // Find all uploads
    const uploadRegex = /\/uploads\/[a-zA-Z0-9_/.-]+/g;
    const matches = html.match(uploadRegex) || [];
    
    // Find bg-paper
    const bgPaperRegex = /[a-zA-Z0-9_/.-]+bg-paper\.[a-zA-Z0-9]+/g;
    const bgMatches = html.match(bgPaperRegex) || [];
    
    // Find audio files
    const audioRegex = /\/audio\/[a-zA-Z0-9_/.-]+/g;
    const audioMatches = html.match(audioRegex) || [];

    // Find custom floral/border svgs or pngs if any
    const imageRegex = /"([^"]+\.(png|jpg|jpeg|gif|svg|webp|m4a|mp3))"/gi;
    let match;
    const allUrls = new Set();
    
    while ((match = imageRegex.exec(html)) !== null) {
      let urlStr = match[1];
      if (urlStr.startsWith('/') && !urlStr.startsWith('//')) {
        allUrls.add(urlStr);
      } else if (urlStr.includes('miuwedding.com')) {
        const urlObj = new URL(urlStr);
        allUrls.add(urlObj.pathname);
      }
    }
    
    // Add matches to allUrls
    [...matches, ...bgMatches, ...audioMatches].forEach(match => {
      if (match.startsWith('/') && !match.startsWith('//')) {
        allUrls.add(match);
      } else {
        // clean up match
        if (match.includes('bg-paper')) {
          allUrls.add('/' + match.replace(/^.*assets\//, 'assets/'));
        }
      }
    });

    console.log(`Found ${allUrls.size} potential assets:`);
    const assetList = Array.from(allUrls);
    console.log(assetList);

    // Save to download manifest
    fs.writeFileSync('assets_manifest.json', JSON.stringify(assetList, null, 2));
    console.log('Saved manifest to assets_manifest.json');

    // Download each asset
    for (const relativePath of assetList) {
      // Clean path
      let cleanRelative = relativePath.split('?')[0];
      if (cleanRelative.startsWith('/')) {
        cleanRelative = cleanRelative.slice(1);
      }
      
      const fullUrl = `${BASE_URL}/${cleanRelative}`;
      const destPath = path.join(__dirname, 'public', cleanRelative);
      
      try {
        await downloadFile(fullUrl, destPath);
      } catch (err) {
        console.error(`Error downloading ${fullUrl}: ${err.message}`);
      }
    }
    
    console.log('Asset download finished!');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
