import { describe, expect, it } from 'vitest';
import { UI, type UiKey } from './ui';

const keys = Object.keys(UI) as UiKey[];

describe('словник інтерфейсу', () => {
  it('не порожній', () => {
    expect(keys.length).toBeGreaterThan(0);
  });

  it.each(keys)('%s має обидві мови', (key) => {
    expect(UI[key].uk.trim()).not.toBe('');
    expect(UI[key].en.trim()).not.toBe('');
  });

  it.each(keys)('%s — переклади різні', (key) => {
    // Однаковий текст у двох мовах майже завжди означає забутий переклад.
    // Винятки нижче — слова, що справді збігаються.
    const SAME_BY_DESIGN: UiKey[] = ['heroRole'];
    if (SAME_BY_DESIGN.includes(key)) return;
    expect(UI[key].uk).not.toBe(UI[key].en);
  });
});
