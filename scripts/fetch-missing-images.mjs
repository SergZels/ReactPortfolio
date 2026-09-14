// Разове завантаження зображень, які існують лише на NAS або на чужих сайтах.
// Запуск: node scripts/fetch-missing-images.mjs
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

const FILES = [
  ['https://zelse.asuscomm.com/portfolio/img/hero.jpg', 'Content/_hero/hero.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port7.jpg', 'Content/FamilyExpenses/1.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port6.jpg', 'Content/BiznesStatisticBot/1.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port1.jpg', 'Content/TerInfoBot/cover.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port2.jpg', 'Content/WaterBot/cover.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port5.jpg', 'Content/CzechBeads/cover.jpg'],
];

// Одне зображення проєкту eSim лежало на CDN Upwork і віддає 403 — Upwork
// не дозволяє пряме завантаження. Втрати немає: у Content/eSim/ уже є три
// власні файли (logo.jpg, 1.png, 2.png), їх достатньо для обкладинки й кадрів.

let ok = 0;
const failed = [];

for (const [url, rel] of FILES) {
  const dest = resolve(ROOT, rel);
  try {
    await access(dest);
    console.log(`пропущено (вже є): ${rel}`);
    ok += 1;
    continue;
  } catch {
    // файлу немає — качаємо
  }
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.byteLength < 1024) throw new Error(`підозріло малий файл: ${buf.byteLength} Б`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`завантажено: ${rel} (${Math.round(buf.byteLength / 1024)} КБ)`);
    ok += 1;
  } catch (err) {
    console.error(`ПОМИЛКА ${rel}: ${err.message}`);
    failed.push(rel);
  }
}

console.log(`\nготово: ${ok}/${FILES.length}`);
if (failed.length) {
  console.error(`не вдалося: ${failed.join(', ')}`);
  process.exitCode = 1;
}
