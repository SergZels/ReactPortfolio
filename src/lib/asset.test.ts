import { afterEach, describe, expect, it, vi } from 'vitest';
import { asset } from './asset';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('asset', () => {
  it('у корені домену лишає шлях як є', () => {
    vi.stubEnv('BASE_URL', '/');
    expect(asset('/shots/dedit/1-1280.webp')).toBe('/shots/dedit/1-1280.webp');
  });

  it('додає базовий шлях GitHub Pages', () => {
    vi.stubEnv('BASE_URL', '/ReactPortfolio/');
    expect(asset('/shots/dedit/1-1280.webp')).toBe('/ReactPortfolio/shots/dedit/1-1280.webp');
  });

  it('не подвоює слеш', () => {
    vi.stubEnv('BASE_URL', '/ReactPortfolio/');
    expect(asset('shots/x.webp')).toBe('/ReactPortfolio/shots/x.webp');
    expect(asset('/shots/x.webp')).not.toContain('//shots');
  });
});
