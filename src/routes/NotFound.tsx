import { Link } from 'react-router';
import { useLang } from '../i18n/LangContext';
import { useMeta } from '../hooks/useMeta';

export default function NotFound() {
  const { t } = useLang();
  useMeta({ title: '404', description: t('notFoundTitle') });

  return (
    <div className="py-32 text-center">
      <p className="font-mono text-5xl text-accent">404</p>
      <h1 className="mt-4 text-xl">{t('notFoundTitle')}</h1>
      <Link to="/" className="mt-6 inline-block text-sm text-accent hover:underline">
        {t('notFoundHome')}
      </Link>
    </div>
  );
}
