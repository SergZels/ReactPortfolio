import type { Lang } from '../i18n/LangContext';
import type { Localized, Tech } from '../types';

const LABELS: Partial<Record<Tech, Localized>> = {
  vr: { uk: 'VR', en: 'VR' },
  embedded: { uk: 'Embedded', en: 'Embedded' },
  'quantum-computing': { uk: 'Квантові комп’ютери', en: 'Quantum computing' },
};

export const PROMOTED_TECH_FILTERS = new Set<Tech>(['vr', 'embedded', 'quantum-computing']);

export function technologyLabel(tech: Tech, lang: Lang): string {
  return LABELS[tech]?.[lang] ?? tech;
}
