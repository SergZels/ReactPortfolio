import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LangProvider } from '../i18n/LangContext';
import { ThemeProvider } from '../theme/ThemeContext';
import { Shell } from './Shell';

// У jsdom navigator.language англійська, тож без цього підписи були б
// англійськими, а тести шукають українські.
beforeEach(() => {
  localStorage.setItem('portfolio-lang', 'uk');
  localStorage.removeItem('portfolio-theme');
  document.documentElement.removeAttribute('data-theme');
});

function renderShell(basename?: string) {
  return render(
    <ThemeProvider>
      <LangProvider>
        {/* Початкова адреса має бути всередині basename, інакше роутер
            не знаходить збігу й не рендерить нічого. */}
        <MemoryRouter basename={basename} initialEntries={[`${basename ?? ''}/`]}>
          <Shell>вміст</Shell>
        </MemoryRouter>
      </LangProvider>
    </ThemeProvider>,
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

  it('має кнопку теми з підписом, зрозумілим без іконки', async () => {
    const user = userEvent.setup();
    renderShell();

    const toDark = screen.getByRole('button', { name: 'Увімкнути темну тему' });
    await user.click(toDark);

    // Після перемикання кнопка пропонує зворотну дію.
    expect(screen.getByRole('button', { name: 'Увімкнути світлу тему' })).toBeInTheDocument();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('прокручує до секції, коли в адресі є хеш', () => {
    // Навігація йде через react-router без перезавантаження, тож браузер
    // сам до якоря не переходить — це має робити застосунок.
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <ThemeProvider>
        <LangProvider>
          <MemoryRouter initialEntries={['/#stack']}>
            <Shell>
              <section id="stack">стек</section>
            </Shell>
          </MemoryRouter>
        </LangProvider>
      </ThemeProvider>,
    );

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });
});
