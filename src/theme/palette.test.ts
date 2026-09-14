import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { contrastRatio } from './contrast';

const css = readFileSync(resolve(import.meta.dirname, '../index.css'), 'utf8');

/** Витягнути змінні з блоку, що починається із заданого селектора. */
function tokens(selector: string): Record<string, string> {
  const start = css.indexOf(selector);
  if (start < 0) throw new Error(`у index.css немає блоку ${selector}`);
  const open = css.indexOf('{', start);
  const close = css.indexOf('}', open);
  const body = css.slice(open + 1, close);

  const result: Record<string, string> = {};
  for (const [, name, value] of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    result[name!] = value!.trim();
  }
  return result;
}

const light = tokens(':root {');
// Темна тема перевизначає лише частину токенів, решту успадковує.
const dark = { ...light, ...tokens(':root[data-theme=\'dark\']') };

/** Пари «колір тексту / тло», які реально зустрічаються в інтерфейсі. */
const PAIRS: [fg: string, bg: string, де: string][] = [
  ['text', 'bg', 'основний текст на тлі сторінки'],
  ['text-dim', 'bg', 'описи на тлі сторінки'],
  ['text-faint', 'bg', 'рік і технології на тлі сторінки'],
  ['text', 'surface', 'назва картки'],
  ['text-dim', 'surface', 'опис у картці'],
  ['text-faint', 'surface', 'технології в картці'],
  ['accent', 'bg', 'акцентні заголовки секцій'],
  ['accent', 'surface', 'акцент у картці'],
  ['ok', 'surface-2', 'мітка статусу проєкту'],
];

const MIN = 4.5;

describe.each([
  ['світла', light],
  ['темна', dark],
])('%s тема', (_назва, palette) => {
  it('визначає всі потрібні токени', () => {
    for (const key of ['bg', 'surface', 'surface-2', 'text', 'text-dim', 'text-faint', 'accent', 'accent-dim', 'ok']) {
      expect(palette[key], `немає --${key}`).toMatch(/^#[0-9a-fA-F]{3,6}$/);
    }
  });

  it.each(PAIRS)('%s на %s (%s) читається', (fg, bg, _де) => {
    const ratio = contrastRatio(palette[fg]!, palette[bg]!);
    expect(
      Number(ratio.toFixed(2)),
      `--${fg} на --${bg}: ${ratio.toFixed(2)}:1, треба ${MIN}:1`,
    ).toBeGreaterThanOrEqual(MIN);
  });

  it('білий текст на акцентній кнопці читається', () => {
    const ratio = contrastRatio('#ffffff', palette['accent-dim']!);
    expect(Number(ratio.toFixed(2))).toBeGreaterThanOrEqual(MIN);
  });
});
