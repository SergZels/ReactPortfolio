/**
 * Старий шлях (нижнім регістром, без слеша) → новий slug.
 * Зберігає зовнішні посилання на сторінки попереднього портфоліо.
 */
export const REDIRECTS: Record<string, string> = {
  rr: 'rrepair-crm',
  dedit: 'dedit',
  bybit: 'bybit-copy-trading',
  project1: 'terinfobot',
  hrbot: 'hr-bot',
  coderevai: 'code-review-ai',
  waterbot: 'water-bot',
  familyexpenses: 'family-expenses',
  mobdev: 'mobile-dev',
  prokat: 'prokat',
  atele: 'atele',
  orxidbot: 'orxid-viber-bot',
  botbiznesstatistics: 'biznes-statistics-bot',
  orxidstatistics: 'orxid-accounting',
  staticsite: 'orxid-site',
  beadsparser: 'beads-parser',
  gingr: 'gingr-analytics',
  czechbeads: 'czech-beads-bot',
  make: 'esim-shop',
  poland: 'poland-flask',
  museum: 'museum',
  botportfolio: 'bot-portfolio',
  guard: 'guard-bot',
  other: 'other-projects',
};
