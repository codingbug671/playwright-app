// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file (default .env, or .env.qa, .env.uat depending on how you run)
dotenv.config();

// Load the right .env file
const envFile = process.env.ENV ? `.env.${process.env.ENV}` : '.env';
dotenv.config({ path: path.resolve(__dirname, envFile) });

// 👇 Debug logs to check values
console.log('Loaded ENV file:', envFile);
console.log('ENV:', process.env.ENV);
console.log('BASIC_AUTH_USER:', process.env.BASIC_AUTH_USER);
console.log('BASIC_AUTH_PASS:', process.env.BASIC_AUTH_PASS ? '***hidden***' : 'not set');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 120000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. */
  use: {
    /* Base URL depends on ENV */
    baseURL:
      process.env.ENV === 'uat'
        ? 'https://student-uat-icademy.edi-uae.com/'
        : 'https://student-qa-icademy.edi-uae.com/',

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    /* Only set httpCredentials if present in env */
    httpCredentials:
      process.env.BASIC_AUTH_USER && process.env.BASIC_AUTH_PASS
        ? {
            username: process.env.BASIC_AUTH_USER,
            password: process.env.BASIC_AUTH_PASS,
          }
        : undefined,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // You can enable more browsers here if needed
  ],
});
