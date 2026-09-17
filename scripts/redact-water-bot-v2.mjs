// Public portfolio copies only. Keep the original screenshots untouched in Content/WaterBot/v2.
import sharp from 'sharp';
import { resolve } from 'node:path';

const dir = resolve(import.meta.dirname, '../Content/WaterBot/v2');

async function mask(input, output, rectangles) {
  const source = resolve(dir, input);
  const { width, height } = await sharp(source).metadata();
  const overlay = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">` +
      rectangles.map(({ x, y, w, h, fill }) =>
        `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}"/>`,
      ).join('') +
    '</svg>',
  );
  await sharp(source).composite([{ input: overlay }]).png().toFile(resolve(dir, output));
}

await mask('бот.png', 'бот-redacted.png', [
  // Account, name and address in the confirmation and success messages.
  { x: 74, y: 71, w: 435, h: 111, fill: '#ffffff' },
  { x: 74, y: 500, w: 435, h: 121, fill: '#ffffff' },
]);

await mask('бот 2.png', 'бот-2-redacted.png', [
  // Private answers in the four-step conversation and the user's profile photos.
  { x: 30, y: 32, w: 65, h: 68, fill: '#d9e9c6' },
  { x: 30, y: 188, w: 65, h: 67, fill: '#d9e9c6' },
  { x: 30, y: 345, w: 65, h: 67, fill: '#d9e9c6' },
  { x: 30, y: 508, w: 65, h: 67, fill: '#d9e9c6' },
  { x: 94, y: 195, w: 340, h: 42, fill: '#eaffd3' },
  { x: 94, y: 353, w: 400, h: 54, fill: '#eaffd3' },
  { x: 94, y: 516, w: 490, h: 53, fill: '#eaffd3' },
]);

// The admin table contains real subscriber data. Show only the controls and column headings.
await sharp(resolve(dir, 'адмінка.png'))
  .extract({ left: 0, top: 0, width: 1684, height: 531 })
  .png()
  .toFile(resolve(dir, 'адмінка-redacted.png'));
