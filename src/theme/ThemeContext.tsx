import { createContext, use, useCallback, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'portfolio-theme';

type ThemeValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeValue | null>(null);

export function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    // приватний режим — читати не вдалося
    return 'light';
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    // Світла тема — базова в CSS, тож атрибут потрібен лише для темної.
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // не критично — вибір просто не запам'ятається
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return <ThemeContext value={{ theme, toggle }}>{children}</ThemeContext>;
}

export function useTheme(): ThemeValue {
  const ctx = use(ThemeContext);
  if (!ctx) throw new Error('useTheme використано поза ThemeProvider');
  return ctx;
}
