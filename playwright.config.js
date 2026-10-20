const {defineConfig, devices} = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  retries: 0,
  workers: 2,
  reporter: [['list'], ['html', {open: 'never'}]],
  use: {baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure'},
  projects: [
    {name: 'desktop', use: {viewport: {width: 1440, height: 1000}, browserName: 'chromium'}},
    {name: 'mobile', use: {...devices['iPhone 13'], defaultBrowserType: 'chromium'}},
    {name: 'narrow', use: {viewport: {width: 320, height: 800}, browserName: 'chromium', isMobile: true, hasTouch: true}},
  ],
  webServer: {
    command: 'npm run serve -- --port 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
