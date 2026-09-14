import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Прокрутка до секції за хешем в адресі.
 *
 * Потрібна, бо навігація в межах застосунку йде через react-router: адреса
 * змінюється без перезавантаження, і браузер сам до якоря не переходить.
 * Працює і при першому завантаженні сторінки з хешем — ефект спрацьовує
 * після того, як React відмалював секції.
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }, [hash, pathname]);
}
