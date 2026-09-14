import type { Tech } from '../types';
import { useLang } from '../i18n/LangContext';

export function StackFilter({
  options,
  value,
  onChange,
}: {
  options: Tech[];
  value: Tech | null;
  onChange: (v: Tech | null) => void;
}) {
  const { t } = useLang();

  const cls = (active: boolean) =>
    `rounded border px-3 py-1 font-mono text-xs ${
      active ? 'border-accent text-accent' : 'border-border text-text-faint hover:border-border-strong'
    }`;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
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
          {tech}
        </button>
      ))}
    </div>
  );
}
