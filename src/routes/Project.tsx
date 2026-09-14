import { Link, useParams } from 'react-router';
import { Globe, ArrowLeft } from 'lucide-react';
import { GithubIcon, TelegramIcon, YoutubeIcon } from '../components/BrandIcons';
import { projects } from '../data/projects';
import { useLang } from '../i18n/LangContext';
import type { UiKey } from '../i18n/ui';
import { useMeta } from '../hooks/useMeta';
import NotFound from './NotFound';
import type { Project as ProjectType } from '../types';

const STATUS_KEY: Record<ProjectType['status'], UiKey> = {
  production: 'statusProduction',
  archived: 'statusArchived',
  pet: 'statusPet',
};

export default function Project() {
  const { slug } = useParams();
  const { t, pick } = useLang();
  const project = projects.find((p) => p.slug === slug);

  useMeta({
    title: project ? `${project.title} — Sergiy Zelinskii` : '404',
    description: project ? pick(project.summary) : '',
  });

  if (!project) return <NotFound />;

  const links = [
    { url: project.links.github, Icon: GithubIcon, key: 'linkGithub' as UiKey },
    { url: project.links.telegram, Icon: TelegramIcon, key: 'linkTelegram' as UiKey },
    { url: project.links.live, Icon: Globe, key: 'linkLive' as UiKey },
    { url: project.links.youtube, Icon: YoutubeIcon, key: 'linkYoutube' as UiKey },
  ];

  return (
    <article className="py-14">
      <Link
        to="/#cases"
        className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-accent"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        {t('backToCases')}
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h1 className="font-mono text-3xl">{project.title}</h1>
          <span className="rounded bg-surface-2 px-2 py-0.5 font-mono text-xs text-ok">
            {t(STATUS_KEY[project.status])}
          </span>
          <span className="font-mono text-sm text-text-faint">{project.year}</span>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-text-dim">{pick(project.summary)}</p>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-faint">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {links.map(({ url, Icon, key }) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm hover:border-accent"
              >
                <Icon size={16} aria-hidden="true" />
                {t(key)}
              </a>
            ) : null,
          )}
        </div>
      </header>

      <div className="mt-12 space-y-14">
        {project.shots.map((shot, i) => (
          <figure key={shot.src}>
            <img
              src={shot.src}
              srcSet={`${shot.src.replace('-1280', '-640')} 640w, ${shot.src} 1280w`}
              sizes="(max-width: 900px) 100vw, 900px"
              alt={
                shot.caption
                  ? pick(shot.caption)
                  : `${project.title} — ${t('shotAlt')} ${i + 1}`
              }
              loading={i === 0 ? 'eager' : 'lazy'}
              width={1280}
              height={720}
              className="h-auto w-full rounded-lg border border-border"
            />
            {shot.caption && (
              <figcaption className="mt-3 whitespace-pre-line text-sm leading-relaxed text-text-dim">
                {pick(shot.caption)}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </article>
  );
}
