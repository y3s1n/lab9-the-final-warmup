// playwright.config.js
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test-e2e',
  timeout: 30 * 1000,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://127.0.0.1:8080',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  
  ],
  webServer: {
    command: 'npm run dev -- --host 0.0.0.0 --port 8080',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: !process.env.CI,
  },
});
