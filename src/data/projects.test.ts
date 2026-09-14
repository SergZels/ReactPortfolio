import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { KNOWN_STACK, type Localized } from '../types';
import { projects } from './projects';

const PUBLIC_DIR = resolve(import.meta.dirname, '../../public');
const localized = (v: Localized) => v.uk.trim().length > 0 && v.en.trim().length > 0;

describe('дані проєктів', () => {
  it('містить рівно 24 проєкти', () => {
    expect(projects).toHaveLength(24);
  });

  it('має рівно 6 featured-проєктів', () => {
    expect(projects.filter((p) => p.featured)).toHaveLength(6);
  });

  it('усі slug унікальні', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('не містить посилань на NAS', () => {
    expect(JSON.stringify(projects)).not.toContain('zelse.asuscomm.com');
  });

  it.each(projects.map((p) => [p.slug, p] as const))('%s — коректний', (_slug, p) => {
    expect(p.slug).toMatch(/^[a-z0-9-]+$/);
    expect(p.title.trim()).not.toBe('');
    expect(p.year).toBeGreaterThanOrEqual(2010);
    expect(p.year).toBeLessThanOrEqual(new Date().getFullYear());
    expect(localized(p.summary)).toBe(true);
    expect(p.stack.length).toBeGreaterThan(0);
    for (const tech of p.stack) {
      expect(KNOWN_STACK).toContain(tech);
    }
    for (const shot of p.shots) {
      // Підпис необов'язковий, але якщо він є — має бути двома мовами.
      if (shot.caption) expect(localized(shot.caption)).toBe(true);
    }
  });

  it.each(projects.map((p) => [p.slug, p] as const))(
    '%s — файли зображень існують',
    (_slug, p) => {
      expect(existsSync(resolve(PUBLIC_DIR, p.cover.replace(/^\//, '')))).toBe(true);
      for (const shot of p.shots) {
        expect(existsSync(resolve(PUBLIC_DIR, shot.src.replace(/^\//, '')))).toBe(true);
      }
    },
  );
});
