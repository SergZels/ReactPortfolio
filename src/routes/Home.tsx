import { Hero } from '../sections/Hero';
import { Cases } from '../sections/Cases';
import { About } from '../sections/About';
import { Stack } from '../sections/Stack';
import { Contact } from '../sections/Contact';
import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';
import { useMeta } from '../hooks/useMeta';

export default function Home() {
  const { pick } = useLang();
  useMeta({ title: profile.name, description: pick(profile.tagline) });

  return (
    <>
      <Hero />
      <Cases />
      <About />
      <Stack />
      <Contact />
    </>
  );
}
