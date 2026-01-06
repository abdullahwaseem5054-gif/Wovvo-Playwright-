import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',
  workers: 2,
  timeout: 40000,
  retries: 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://wovvo-fe.chillkro.com/',
    headless: false,
    viewport: { width: 1200, height: 760 },
    video: 'on',
    screenshot: 'on',
    trace: 'off', 
  },
  projects: [
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      },
    },

    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
