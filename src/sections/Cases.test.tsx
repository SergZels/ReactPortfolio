import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { LangProvider } from '../i18n/LangContext';
import { projects } from '../data/projects';
import { PROMOTED_TECH_FILTERS } from '../data/technology';
import type { Tech } from '../types';
import { Cases } from './Cases';

function renderCases() {
  return render(
    <LangProvider>
      <MemoryRouter>
        <Cases />
      </MemoryRouter>
    </LangProvider>,
  );
}

/** Технологія, яка є у фільтрі (від двох проєктів) і покриває не всі проєкти. */
function filterableTech() {
  const counts = new Map<string, number>();
  for (const p of projects) {
    for (const tech of p.stack) counts.set(tech, (counts.get(tech) ?? 0) + 1);
  }
  const tech = [...counts.entries()].find(([, n]) => n >= 2 && n < projects.length)?.[0];
  if (!tech) throw new Error('немає технології, придатної для перевірки фільтра');
  return tech;
}

describe('секція кейсів', () => {
  it('без фільтра показує всі проєкти', () => {
    renderCases();
    for (const p of projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it('фільтр за технологією лишає лише проєкти з нею', async () => {
    const user = userEvent.setup();
    const tech = filterableTech();
    renderCases();

    await user.click(screen.getByRole('button', { name: tech }));

    const matching = projects.filter((p) => (p.stack as string[]).includes(tech));
    const excluded = projects.filter((p) => !(p.stack as string[]).includes(tech));
    expect(matching.length).toBeGreaterThan(0);
    expect(excluded.length).toBeGreaterThan(0);

    for (const p of matching) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
    for (const p of excluded) {
      expect(screen.queryByText(p.title)).not.toBeInTheDocument();
    }
  });

  it('повторний клік по активному фільтру знімає його', async () => {
    const user = userEvent.setup();
    renderCases();

    const button = screen.getByRole('button', { name: filterableTech() });
    await user.click(button);
    await user.click(button);

    for (const p of projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it('фільтр за роком лишає лише проєкти вибраного року', async () => {
    const user = userEvent.setup();
    const year = Math.max(...projects.map((project) => project.year));
    renderCases();

    await user.click(screen.getByRole('button', { name: String(year) }));

    for (const project of projects.filter((item) => item.year === year)) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
    for (const project of projects.filter((item) => item.year !== year)) {
      expect(screen.queryByText(project.title)).not.toBeInTheDocument();
    }
  });

  it('комбінує фільтри за технологією та роком', async () => {
    const user = userEvent.setup();
    const tech = filterableTech();
    const matching = projects.filter((project) => (project.stack as string[]).includes(tech));
    const candidate = matching.at(0);
    if (!candidate) throw new Error('немає проєкту для комбінованого фільтра');
    const year = candidate.year;
    renderCases();

    await user.click(screen.getByRole('button', { name: tech }));
    await user.click(screen.getByRole('button', { name: String(year) }));

    for (const project of projects) {
      const shouldBeVisible = project.year === year && (project.stack as string[]).includes(tech);
      const assertion = shouldBeVisible ? screen.getByText(project.title) : screen.queryByText(project.title);
      if (shouldBeVisible) expect(assertion).toBeInTheDocument();
      else expect(assertion).not.toBeInTheDocument();
    }
  });

  it('у фільтрі немає технологій, що трапляються лише раз', () => {
    renderCases();
    const counts = new Map<string, number>();
    for (const p of projects) {
      for (const tech of p.stack) counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
    for (const [tech, n] of counts) {
      if (n === 1 && !PROMOTED_TECH_FILTERS.has(tech as Tech)) {
        expect(screen.queryByRole('button', { name: tech })).not.toBeInTheDocument();
      }
    }
  });

  it('показує окремі фільтри VR, Embedded і квантових комп’ютерів', () => {
    renderCases();

    expect(screen.getByRole('button', { name: 'VR' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Embedded' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Quantum computing' })).toBeInTheDocument();
  });
});
