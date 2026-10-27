import { useLang } from '../i18n/LangContext';

export function YearFilter({
  options,
  value,
  onChange,
}: {
  options: number[];
  value: number | null;
  onChange: (value: number | null) => void;
}) {
  const { t } = useLang();

  const cls = (active: boolean) =>
    `rounded border px-3 py-1 font-mono text-xs ${
      active ? 'border-accent text-accent' : 'border-border text-text-faint hover:border-border-strong'
    }`;

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={t('casesYearFilter')}>
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        aria-label={t('casesAllYears')}
        className={cls(value === null)}
      >
        {t('casesAll')}
      </button>
      {options.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onChange(value === year ? null : year)}
          aria-pressed={value === year}
          className={cls(value === year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
