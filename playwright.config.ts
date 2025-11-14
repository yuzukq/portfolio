import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['list'], ['html']] : [['list']],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run build && npm run start',
    port: 3000,
    reuseExistingServer: !process.env.CI
  }
});
