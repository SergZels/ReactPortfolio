export type Localized = { uk: string; en: string };

export type ProjectStatus = 'production' | 'archived' | 'pet';

export type StackLevel = 'daily' | 'confident' | 'familiar';

/** Єдиний дозволений перелік технологій. Захищає фільтр від друкарських помилок. */
export const KNOWN_STACK = [
  'python',
  'aiogram',
  'django',
  'fastapi',
  'flask',
  'postgresql',
  'sqlite',
  'sqlalchemy',
  'peewee',
  'html-css',
  'htmx',
  'javascript',
  'react',
  'go',
  'php',
  'java',
  'vba',
  'make.com',
  'docker',
  'nginx',
  'linux',
  'jinja2',
  'ms-access',
  'excel',
  'viber',
  'openai',
] as const;

export type Tech = (typeof KNOWN_STACK)[number];

export type Shot = {
  src: string;
  caption: Localized;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  status: ProjectStatus;
  featured: boolean;
  summary: Localized;
  stack: Tech[];
  links: {
    github?: string;
    telegram?: string;
    live?: string;
    youtube?: string;
  };
  cover: string;
  shots: Shot[];
};
