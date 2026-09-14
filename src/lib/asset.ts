/**
 * Шлях до файлу з public/ з урахуванням базового шляху збірки.
 *
 * На GitHub Pages сайт живе не в корені домену, а в /ReactPortfolio/.
 * Абсолютний шлях «/shots/...» там веде в нікуди, тож кожне посилання
 * на статичний файл треба пропускати через цю функцію.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
}
