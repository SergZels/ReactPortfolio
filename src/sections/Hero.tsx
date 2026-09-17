import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';
import { asset } from '../lib/asset';

export function Hero() {
  const { t } = useLang();

  return (
    <section className="py-20 sm:py-28">
      <p className="hero-prompt font-mono text-sm text-accent">~/sergzels $ whoami</p>
      <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{profile.name}</h1>
      <p className="mt-3 font-mono text-sm text-text-dim">{t('heroRole')}</p>

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
