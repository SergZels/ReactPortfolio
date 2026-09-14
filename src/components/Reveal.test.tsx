import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Reveal } from './Reveal';

const realIO = window.IntersectionObserver;

afterEach(() => {
  window.IntersectionObserver = realIO;
  vi.useRealTimers();
});

describe('Reveal', () => {
  it('показує вміст, коли спостерігач повідомляє про появу в кадрі', () => {
    render(<Reveal>вміст</Reveal>);
    expect(screen.getByText('вміст')).toHaveClass('opacity-100');
  });

  describe('коли IntersectionObserver мовчить', () => {
    beforeEach(() => {
      // Спостерігач, який приймає елемент і ніколи не викликає колбек —
      // саме так поводився браузер у прихованій вкладці.
      class SilentObserver {
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() {
          return [];
        }
        root = null;
        rootMargin = '';
        thresholds = [];
      }
      window.IntersectionObserver = SilentObserver as unknown as typeof IntersectionObserver;
    });

    it('усе одно показує вміст після запасного таймера', () => {
      vi.useFakeTimers();
      render(<Reveal>вміст</Reveal>);

      expect(screen.getByText('вміст')).toHaveClass('opacity-0');

      act(() => {
        vi.advanceTimersByTime(1300);
      });

      expect(screen.getByText('вміст')).toHaveClass('opacity-100');
    });
  });

  it('без підтримки IntersectionObserver показує вміст одразу', () => {
    // @ts-expect-error навмисно прибираємо API, щоб перевірити запасний шлях
    delete window.IntersectionObserver;
    render(<Reveal>вміст</Reveal>);
    expect(screen.getByText('вміст')).toHaveClass('opacity-100');
  });
});
