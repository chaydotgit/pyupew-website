import { promises as fs } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const artworkDir = path.resolve(__dirname, '../assets/Artwork');
const manifestPath = path.resolve(__dirname, '../assets/artwork-manifest.json');

async function run() {
  const entries = await fs.readdir(artworkDir, { withFileTypes: true });

  const exts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);
  const filesWithDates = await Promise.all(
    entries
      .filter(d => d.isFile() && exts.has(path.extname(d.name).toLowerCase()))
      .map(async d => {
        const fullPath = path.join(artworkDir, d.name);
        const stat = await fs.stat(fullPath);
        return {
          name: d.name,
          mtime: stat.mtimeMs // modification time in ms
        };
      })
  );

  // Sort by newest first
  filesWithDates.sort((a, b) => b.mtime - a.mtime);

  const files = filesWithDates.map(f => `assets/Artwork/${f.name}`);

  await fs.writeFile(manifestPath, JSON.stringify(files, null, 2), 'utf8');
  console.log(`Wrote ${files.length} items (newest first) to ${manifestPath}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
