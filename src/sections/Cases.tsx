import { useMemo, useState } from 'react';
import type { Tech } from '../types';
import { projects } from '../data/projects';
import { useLang } from '../i18n/LangContext';
import { ProjectCard } from '../components/ProjectCard';
import { StackFilter } from '../components/StackFilter';
import { Reveal } from '../components/Reveal';

export function Cases() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Tech | null>(null);

  // У фільтр потрапляють лише технології, що трапляються мінімум двічі —
  // кнопка, яка показує один проєкт, займає місце й нічого не дає.
  const options = useMemo(() => {
    const counts = new Map<Tech, number>();
    for (const p of projects) {
      for (const tech of p.stack) counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
    return [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([tech]) => tech);
  }, []);

  const visible = filter ? projects.filter((p) => p.stack.includes(filter)) : projects;
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <section id="cases" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('casesTitle')}</h2>

      <div className="mt-6">
        <StackFilter options={options} value={filter} onChange={setFilter} />
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
