import { profile, YEARS_CODING } from '../data/profile';
import { projects } from '../data/projects';
import { useLang } from '../i18n/LangContext';
import { asset } from '../lib/asset';

export function Hero() {
  const { t, pick } = useLang();

  const metrics = [
    { value: YEARS_CODING, label: t('metricYears') },
    { value: projects.length, label: t('metricProjects') },
    { value: profile.stack.length, label: t('metricStack') },
  ];

  return (
    <section className="py-20 sm:py-28">
      <p className="hero-prompt font-mono text-sm text-accent">~/sergzels $ whoami</p>
      <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{profile.name}</h1>
      <p className="mt-3 font-mono text-sm text-text-dim">{t('heroRole')}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-dim">{pick(profile.tagline)}</p>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md">
        {metrics.map((m) => (
          <div key={m.label} className="hero-metric rounded-lg bg-surface px-4 py-3">
            <div className="text-2xl font-medium">{m.value}</div>
            <div className="mt-0.5 text-xs text-text-faint">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#cases"
          className="rounded-md bg-accent-dim px-5 py-2.5 text-sm text-white hover:bg-accent"
        >
          {t('heroCta')}
        </a>
        <a
          href={asset(profile.cvUrl)}
          className="rounded-md border border-border-strong px-5 py-2.5 text-sm hover:border-accent"
        >
          {t('heroCv')}
        </a>
      </div>
    </section>
  );
}
