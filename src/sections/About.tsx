import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';
import { Reveal } from '../components/Reveal';

export function About() {
  const { t, pick } = useLang();

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('aboutTitle')}</h2>
      <p className="mt-6 max-w-2xl whitespace-pre-line leading-relaxed text-text-dim">
        {pick(profile.about)}
      </p>

      <h3 className="mt-14 font-mono text-sm text-accent">{t('timelineTitle')}</h3>
      <ol className="mt-6 border-l border-border">
        {profile.timeline.map((item) => (
          <li key={item.year} className="relative py-4 pl-6">
            <span className="absolute -left-[4.5px] top-6 h-2 w-2 rounded-full bg-accent" />
            <Reveal>
              <div className="font-mono text-xs text-text-faint">{item.year}</div>
              <div className="mt-1 font-medium">{pick(item.title)}</div>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-text-dim">
                {pick(item.text)}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
