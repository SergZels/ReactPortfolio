import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeContext';

function Probe() {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" onClick={toggle}>
      {theme}
    </button>
  );
}

const renderProbe = () =>
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  );

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  document.documentElement.removeAttribute('data-theme');
});

describe('тема оформлення', () => {
  it('за замовчуванням світла', () => {
    renderProbe();
    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  it('світла тема не ставить атрибут — вона базова в CSS', () => {
    renderProbe();
    expect(document.documentElement.getAttribute('data-theme')).toBe(null);
  });

  it('перемикання вмикає темну й позначає її на <html>', async () => {
    const user = userEvent.setup();
    renderProbe();

    await user.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveTextContent('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('повторне перемикання повертає світлу', async () => {
    const user = userEvent.setup();
    renderProbe();

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveTextContent('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe(null);
  });

  it('запам’ятовує вибір', async () => {
    const user = userEvent.setup();
    renderProbe();

    await user.click(screen.getByRole('button'));

    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('відновлює збережений вибір', () => {
    localStorage.setItem('portfolio-theme', 'dark');
    renderProbe();
    expect(screen.getByRole('button')).toHaveTextContent('dark');
  });

  it('ігнорує зіпсоване значення у сховищі', () => {
    localStorage.setItem('portfolio-theme', 'смітинка');
    renderProbe();
    expect(screen.getByRole('button')).toHaveTextContent('light');
  });
});
