// Content/** -> public/shots/{slug}/*.webp у двох ширинах.
// Запуск: npm run images
//
// Джерело правди про склад і порядок кадрів — scripts/image-sources.json.
// Той самий порядок закодовано в src/data/projects.ts, тож міняти його
// треба в обох місцях одночасно.
import { mkdir, readFile, rm, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const ROOT = resolve(import.meta.dirname, '..');
const OUT = resolve(ROOT, 'public/shots');
const WIDTHS = [640, 1280];
const QUALITY = 80;

const sources = JSON.parse(await readFile(resolve(ROOT, 'scripts/image-sources.json'), 'utf8'));

await rm(OUT, { recursive: true, force: true });

let totalIn = 0;
let totalOut = 0;
let failed = 0;

async function convert(src, destDir, name, widths) {
  totalIn += (await stat(src)).size;
  const meta = await sharp(src).metadata();
  for (const w of widths) {
    const dest = resolve(destDir, `${name}-${w}.webp`);
    await sharp(src)
      .resize({ width: Math.min(w, meta.width ?? w), withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(dest);
    totalOut += (await stat(dest)).size;
  }
}

for (const [slug, { folder, cover, shots }] of Object.entries(sources)) {
  const srcDir = resolve(ROOT, 'Content', folder);
  const destDir = resolve(OUT, slug);
  await mkdir(destDir, { recursive: true });

  try {
    await convert(resolve(srcDir, cover), destDir, 'cover', [640]);
  } catch (err) {
    console.error(`ПОМИЛКА обкладинки ${slug}: ${err.message}`);
    failed += 1;
  }

  for (const [i, file] of shots.entries()) {
    try {
      await convert(resolve(srcDir, file), destDir, String(i + 1), WIDTHS);
    } catch (err) {
      console.error(`ПОМИЛКА ${slug}/${file}: ${err.message}`);
      failed += 1;
    }
  }

  console.log(`${slug}: обкладинка + ${shots.length} кадрів`);
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(`\nбуло ${mb(totalIn)} МБ → стало ${mb(totalOut)} МБ`);
if (failed) {
  console.error(`не вдалося конвертувати: ${failed}`);
  process.exitCode = 1;
}
