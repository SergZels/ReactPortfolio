import { Link } from 'react-router';
import type { Project } from '../types';
import { useLang } from '../i18n/LangContext';
import type { UiKey } from '../i18n/ui';
import { asset } from '../lib/asset';

const STATUS_KEY: Record<Project['status'], UiKey> = {
  production: 'statusProduction',
  archived: 'statusArchived',
  pet: 'statusPet',
};

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const { t, pick } = useLang();

  return (
    <Link
      to={`/project/${project.slug}`}
      className="project-card group block overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <img
        src={asset(project.cover)}
        alt=""
        loading="lazy"
        width={640}
        height={featured ? 360 : 400}
        className={`w-full object-cover ${featured ? 'aspect-video' : 'aspect-[16/10]'}`}
      />
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-mono text-sm text-text group-hover:text-accent">{project.title}</h3>
          <span className="shrink-0 font-mono text-xs text-text-faint">{project.year}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-dim">
          {pick(project.summary)}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-faint">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {featured && (
          <span className="mt-3 inline-block rounded bg-surface-2 px-2 py-0.5 font-mono text-xs text-ok">
            {t(STATUS_KEY[project.status])}
          </span>
        )}
      </div>
    </Link>
  );
}
