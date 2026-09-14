import { Mail } from 'lucide-react';
import { GithubIcon, TelegramIcon, LinkedinIcon, YoutubeIcon } from '../components/BrandIcons';
import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';

export function Contact() {
  const { t, pick } = useLang();

  const items = [
    { href: `mailto:${profile.contacts.email}`, Icon: Mail, label: profile.contacts.email },
    { href: profile.contacts.telegram, Icon: TelegramIcon, label: 'Telegram' },
    { href: profile.contacts.github, Icon: GithubIcon, label: 'GitHub' },
    { href: profile.contacts.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
    { href: profile.contacts.youtube, Icon: YoutubeIcon, label: 'YouTube' },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('contactTitle')}</h2>
      <p className="mt-4 text-sm text-text-faint">{pick(profile.contacts.location)}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map(({ href, Icon, label }) => {
          const external = !href.startsWith('mailto:');
          return (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm hover:border-accent"
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
