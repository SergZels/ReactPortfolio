import { useEffect, useRef, useState } from 'react';

/** Скільки чекати, поки IntersectionObserver подасть ознаки життя. */
const FALLBACK_MS = 1200;

/**
 * Поява елемента при скролі.
 *
 * Анімація ховає вміст до появи в кадрі, тому відмова спостерігача означала б
 * назавжди невидимий контент. Щоб цього не сталося, будь-який збій веде до
 * «видно без анімації»: немає підтримки IntersectionObserver, увімкнено
 * prefers-reduced-motion або спостерігач просто не спрацював за FALLBACK_MS —
 * елемент показується.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }

    const timer = window.setTimeout(() => setShown(true), FALLBACK_MS);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          window.clearTimeout(timer);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);

    return () => {
      window.clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return { ref, shown };
}
