import type { StackLevel } from '../types';
import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';
import type { UiKey } from '../i18n/ui';

const LEVELS: { level: StackLevel; key: UiKey }[] = [
  { level: 'daily', key: 'levelDaily' },
  { level: 'confident', key: 'levelConfident' },
  { level: 'familiar', key: 'levelFamiliar' },
];

export function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('stackTitle')}</h2>
      <div className="mt-8 space-y-8">
        {LEVELS.map(({ level, key }) => (
          <div key={level}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-faint">{t(key)}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.stack
                .filter((s) => s.level === level)
                .map((s) => (
                  <li
                    key={s.label}
                    className="stack-chip rounded border border-border bg-surface px-3 py-1.5 font-mono text-sm text-text-dim"
                  >
                    {s.label}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
