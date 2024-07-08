import { defineConfig } from '@playwright/test'
const path = require('path');
const testConfig = require('./testconfig');
const ENV = process.env.ENV;
const TEST_TYPE = process.env.TEST_TYPE
const BROWSER_TYPE = process.env.BROWSER_TYPE
const STORAGE_STATE = path.join(__dirname, 'authentication/.auth/admin.json')


export default defineConfig({
  testDir: './tests/',
  timeout: 30000,
  reporter: 'list',
  projects: [
    {
      name: 'setup',
      testMatch:"**/loginSession.setup.js"
    },
    {
      name: 'FunctionalTest',
      testDir: './tests/specs',
      use: {
        browserName: BROWSER_TYPE,
        headless: false,
        storageState: STORAGE_STATE,
        viewport: { width: 1200, height: 800 },
        baseURL: testConfig.functional,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        ignoreHttpsErrors: true,
      },
      dependencies: ['setup'],
    },
  ],
});
export { STORAGE_STATE };
