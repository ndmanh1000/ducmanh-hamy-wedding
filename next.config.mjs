import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project so Next.js does not pick up
  // an unrelated lockfile from a parent directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
