import type { Tech } from '../types';
import { useLang } from '../i18n/LangContext';
import { technologyLabel } from '../data/technology';

export function StackFilter({
  options,
  value,
  onChange,
}: {
  options: Tech[];
  value: Tech | null;
  onChange: (v: Tech | null) => void;
}) {
  const { lang, t } = useLang();

  const cls = (active: boolean) =>
    `rounded border px-3 py-1 font-mono text-xs ${
      active ? 'border-accent text-accent' : 'border-border text-text-faint hover:border-border-strong'
    }`;

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label={t('casesTechnologyFilter')}
    >
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        aria-label={t('casesAllTechnologies')}
        className={cls(value === null)}
      >
        {t('casesAll')}
      </button>
      {options.map((tech) => (
        <button
          key={tech}
          type="button"
          onClick={() => onChange(value === tech ? null : tech)}
          aria-pressed={value === tech}
          className={cls(value === tech)}
        >
          {technologyLabel(tech, lang)}
        </button>
      ))}
    </div>
  );
}
