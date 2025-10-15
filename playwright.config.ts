import { defineConfig, devices } from '@playwright/test';
import { OrtoniReportConfig } from "ortoni-report";

const timestamp = Date.now()
const reportDir = `./reporter/playwright-reports-${timestamp}`;

const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? "always" : "always", // default to never
  folderPath: "report-db",
  filename: "index.html",
  logo:"logo.png",
  title: "TNT Remote area surcharge validation",
  showProject: true,
  projectName: "World-Options Australia",
  testType: "Sanity Testing",
  authorName: "Sathish Radhakrishnan",
  base64Image: false,
  stdIO: false,
  preferredTheme: "light",
  meta: {
    project: "Playwright",
    version: "3.0.0",
    description: "Playwright test report",
    testCycle: "1",
    release: "1.0.0",
    platform: "Windows",
  },
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 6000,
  expect:{
    timeout: 15000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html',{ outputFolder: reportDir, open: 'always' }],
            ["ortoni-report", reportConfig]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    ignoreHTTPSErrors: true,
    headless: false,
    video: 'retain-on-failure',
    screenshot: 'on',
    actionTimeout : 4000,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    storageState: './preliveauth.json',
  },

  /* Configure projects for major browsers */
  projects: [
    /*{
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      viewport:{ width: 1900, height: 1080 },
      },
    },*/

    {
      name: 'chrome',
      use: {
        browserName: 'chromium', ...devices['Desktop Chromium'], channel: 'chrome',
        viewport: null,
        launchOptions: {
          slowMo: 800,
          args: ["--start-maximized", "--disable-web-security",]

        }

      }
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
