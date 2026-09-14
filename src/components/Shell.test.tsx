import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LangProvider } from '../i18n/LangContext';
import { Shell } from './Shell';

// У jsdom navigator.language англійська, тож без цього підписи були б
// англійськими, а тести шукають українські.
beforeEach(() => {
  localStorage.setItem('portfolio-lang', 'uk');
});

function renderShell(basename?: string) {
  return render(
    <LangProvider>
      {/* Початкова адреса має бути всередині basename, інакше роутер
          не знаходить збігу й не рендерить нічого. */}
      <MemoryRouter basename={basename} initialEntries={[`${basename ?? ''}/`]}>
        <Shell>вміст</Shell>
      </MemoryRouter>
    </LangProvider>,
  );
}

describe('Shell', () => {
  it('у корені домену веде на якорі головної', () => {
    renderShell();
    expect(screen.getByRole('link', { name: 'Про мене' })).toHaveAttribute('href', '/#about');
  });

  it('під базовим шляхом додає його до посилань навігації', () => {
    // На GitHub Pages сайт живе в /ReactPortfolio/. Посилання «/#about»
    // повело б на корінь домену — зовсім інший сайт.
    renderShell('/ReactPortfolio');

    // react-router прибирає кінцевий слеш перед хешем — адреса та сама.
    const expected = {
      Кейси: '/ReactPortfolio#cases',
      'Про мене': '/ReactPortfolio#about',
      Стек: '/ReactPortfolio#stack',
      Контакти: '/ReactPortfolio#contact',
    };

    for (const [name, href] of Object.entries(expected)) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
    }
  });

  it('логотип теж враховує базовий шлях', () => {
    renderShell('/ReactPortfolio');
    expect(screen.getByRole('link', { name: '~/sergzels' })).toHaveAttribute(
      'href',
      '/ReactPortfolio',
    );
  });

  it('прокручує до секції, коли в адресі є хеш', () => {
    // Навігація йде через react-router без перезавантаження, тож браузер
    // сам до якоря не переходить — це має робити застосунок.
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <LangProvider>
        <MemoryRouter initialEntries={['/#stack']}>
          <Shell>
            <section id="stack">стек</section>
          </Shell>
        </MemoryRouter>
      </LangProvider>,
    );

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });
});
