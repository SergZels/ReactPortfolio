import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages віддає проєктний сайт за назвою репозиторію:
  // https://sergzels.github.io/ReactPortfolio/
  // Старий package.json мав homepage "/PortfolioReact", що назві репозиторію
  // не відповідало. Якщо сайт має жити за іншою адресою — міняти тут.
  base: '/ReactPortfolio/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
});
