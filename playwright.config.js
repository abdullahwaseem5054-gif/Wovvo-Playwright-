import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',
  workers: 2,
  timeout: 30000,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://app-staging.wovvo.ai',
    headless: false,
    viewport: { width: 1200, height: 760 },
    video: 'on',
    screenshot: 'off',
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
