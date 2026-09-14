import { createContext, use, useCallback, useEffect, useState, type ReactNode } from 'react';
import type { Localized } from '../types';
import { UI, type UiKey } from './ui';

export type Lang = 'uk' | 'en';

const STORAGE_KEY = 'portfolio-lang';

type LangValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: UiKey) => string;
  pick: (value: Localized) => string;
};

const LangContext = createContext<LangValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'uk' || saved === 'en') return saved;
  } catch {
    // приватний режим — читати не вдалося, беремо мову браузера
  }
  return navigator.language.toLowerCase().startsWith('uk') ? 'uk' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // не критично — мова просто не запам'ятається
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const pick = useCallback((value: Localized) => value[lang], [lang]);
  const t = useCallback((key: UiKey) => UI[key][lang], [lang]);

  return <LangContext value={{ lang, setLang, t, pick }}>{children}</LangContext>;
}

export function useLang(): LangValue {
  const ctx = use(LangContext);
  if (!ctx) throw new Error('useLang використано поза LangProvider');
  return ctx;
}
