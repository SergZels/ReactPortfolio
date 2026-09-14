import { Link } from 'react-router';
import type { ReactNode } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLang } from '../i18n/LangContext';
import { useTheme } from '../theme/ThemeContext';
import { useHashScroll } from '../hooks/useHashScroll';
import { profile } from '../data/profile';

const NAV = [
  { href: '/#cases', key: 'navCases' },
  { href: '/#about', key: 'navAbout' },
  { href: '/#stack', key: 'navStack' },
  { href: '/#contact', key: 'navContact' },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useLang();
  const { theme, toggle } = useTheme();
  useHashScroll();

  const control =
    'rounded border border-border-strong text-text-dim hover:border-accent hover:text-text';

  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="font-mono text-sm text-text hover:text-accent">
            ~/sergzels
          </Link>
          <nav className="hidden gap-5 text-sm text-text-dim sm:flex">
            {/* Саме Link, а не <a>: він додає базовий шлях збірки.
                Звичайний href="/#about" на GitHub Pages вів би на корінь
                домену — зовсім інший сайт. */}
            {NAV.map((item) => (
              <Link key={item.key} to={item.href} className="hover:text-text">
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              className={`${control} p-1.5`}
              aria-label={t(theme === 'dark' ? 'themeToLight' : 'themeToDark')}
            >
              {theme === 'dark' ? (
                <Sun size={14} aria-hidden="true" />
              ) : (
                <Moon size={14} aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setLang(lang === 'uk' ? 'en' : 'uk')}
              className={`${control} px-2.5 py-1 font-mono text-xs`}
              aria-label={lang === 'uk' ? 'Switch to English' : 'Перемкнути на українську'}
            >
              {lang === 'uk' ? 'EN' : 'UK'}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5">{children}</main>

      <footer className="mt-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-5 py-8 font-mono text-xs text-text-faint">
          {profile.name} · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
