const fs = require('fs');
const path = require('path');
const https = require('https');

const CSS_URL = 'https://miuwedding.com/templates/wedding/002/css/style.css';
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
    console.log('Fetching style.css...');
    const css = await makeRequest(CSS_URL);
    
    // Find all url(...) references in CSS
    const urlRegex = /url\(['"]?([^'")]+)['"]?\)/g;
    let match;
    const urls = new Set();
    
    while ((match = urlRegex.exec(css)) !== null) {
      const url = match[1];
      if (!url.startsWith('data:')) {
        urls.add(url);
      }
    }
    
    console.log('Found assets in CSS:', Array.from(urls));
    
    for (let relUrl of urls) {
      if (relUrl.startsWith('../')) {
        // Since the CSS is in /templates/wedding/002/css/style.css
        // ../images/abc.png resolves to /templates/wedding/002/images/abc.png
        relUrl = '/templates/wedding/002/' + relUrl.replace(/^\.\.\//, '');
      }
      
      const fullUrl = `${BASE_URL}${relUrl.startsWith('/') ? '' : '/'}${relUrl}`;
      
      // Target destination
      let cleanRelative = relUrl.split('?')[0];
      if (cleanRelative.startsWith('/')) {
        cleanRelative = cleanRelative.slice(1);
      }
      
      const destPath = path.join(__dirname, 'public', cleanRelative);
      try {
        await downloadFile(fullUrl, destPath);
        console.log(`Downloaded: ${fullUrl} -> ${destPath}`);
      } catch (err) {
        console.error(`Failed to download CSS asset ${fullUrl}: ${err.message}`);
      }
    }
    
    console.log('CSS asset download finished!');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
