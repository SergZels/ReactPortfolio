import '@testing-library/jest-dom/vitest';

// jsdom не реалізує ці два API, а на них тримається поява секцій при скролі.
// Заглушки поводяться як браузер із увімкненими анімаціями, де все видно.

if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
}

if (typeof window.IntersectionObserver === 'undefined') {
  class StubIntersectionObserver implements IntersectionObserver {
    readonly root = null;
    readonly rootMargin = '';
    readonly thresholds: ReadonlyArray<number> = [];

    constructor(private callback: IntersectionObserverCallback) {}

    observe(target: Element) {
      // У тестах елемент одразу вважається видимим, інакше вміст,
      // загорнутий у <Reveal>, ніколи не з'явився б.
      this.callback(
        [{ isIntersecting: true, target } as IntersectionObserverEntry],
        this as IntersectionObserver,
      );
    }

    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  window.IntersectionObserver = StubIntersectionObserver as unknown as typeof IntersectionObserver;
}
