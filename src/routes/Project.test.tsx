import { render, screen } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import { LangProvider } from '../i18n/LangContext';
import { projects } from '../data/projects';
import { REDIRECTS } from './redirects';
import Project from './Project';
import NotFound from './NotFound';

function renderAt(path: string) {
  return render(
    <LangProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/project/:slug" element={<Project />} />
          {Object.entries(REDIRECTS).map(([from, slug]) => (
            <Route
              key={from}
              path={`/${from}`}
              element={<Navigate to={`/project/${slug}`} replace />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    </LangProvider>,
  );
}

describe('сторінка кейсу', () => {
  it('рендерить назву і всі кадри', () => {
    const p = projects.find((x) => x.shots.length > 2);
    expect(p).toBeDefined();
    renderAt(`/project/${p!.slug}`);
    expect(screen.getByRole('heading', { name: p!.title })).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(p!.shots.length);
  });

  it('показує посилання, які є, і не показує тих, яких немає', () => {
    const withGithub = projects.find((x) => x.links.github && !x.links.live);
    expect(withGithub).toBeDefined();
    renderAt(`/project/${withGithub!.slug}`);
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Live site|Живий сайт/i })).not.toBeInTheDocument();
  });

  it('невідомий slug дає 404, а не головну', () => {
    renderAt('/project/no-such-project');
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it.each(Object.entries(REDIRECTS))('старий шлях /%s веде на %s', (from, slug) => {
    renderAt(`/${from}`);
    const target = projects.find((p) => p.slug === slug);
    expect(target).toBeDefined();
    expect(screen.getByRole('heading', { name: target!.title })).toBeInTheDocument();
  });
});
