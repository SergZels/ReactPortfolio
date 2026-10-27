import { useMemo, useState } from 'react';
import type { Tech } from '../types';
import { projects } from '../data/projects';
import { useLang } from '../i18n/LangContext';
import { ProjectCard } from '../components/ProjectCard';
import { StackFilter } from '../components/StackFilter';
import { YearFilter } from '../components/YearFilter';
import { Reveal } from '../components/Reveal';
import { PROMOTED_TECH_FILTERS } from '../data/technology';

export function Cases() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Tech | null>(null);
  const [year, setYear] = useState<number | null>(null);

  // У фільтр потрапляють лише технології, що трапляються мінімум двічі —
  // кнопка, яка показує один проєкт, займає місце й нічого не дає.
  const options = useMemo(() => {
    const counts = new Map<Tech, number>();
    for (const p of projects) {
      for (const tech of p.stack) counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
    return [...counts.entries()]
      .filter(([tech, n]) => n >= 2 || PROMOTED_TECH_FILTERS.has(tech))
      .sort((a, b) => b[1] - a[1])
      .map(([tech]) => tech);
  }, []);

  const years = useMemo(
    () => [...new Set(projects.map((project) => project.year))].sort((a, b) => b - a),
    [],
  );

  const visible = projects.filter(
    (project) =>
      (filter === null || project.stack.includes(filter)) &&
      (year === null || project.year === year),
  );
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <section id="cases" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('casesTitle')}</h2>

      <div className="mt-6 space-y-4">
        <div className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:items-start">
          <span className="pt-1 font-mono text-xs uppercase tracking-wider text-text-faint">
            {t('casesTechnologyFilter')}
          </span>
          <StackFilter options={options} value={filter} onChange={setFilter} />
        </div>
        <div className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:items-start">
          <span className="pt-1 font-mono text-xs uppercase tracking-wider text-text-faint">
            {t('casesYearFilter')}
          </span>
          <YearFilter options={years} value={year} onChange={setYear} />
        </div>
      </div>

      {visible.length === 0 && <p className="mt-10 text-sm text-text-dim">{t('casesEmpty')}</p>}

      {featured.length > 0 && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} featured />
            </Reveal>
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <>
          {featured.length > 0 && (
            <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-text-faint">
              {t('casesRest')}
            </h3>
          )}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
