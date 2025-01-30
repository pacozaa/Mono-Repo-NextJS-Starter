import { defineConfig, devices } from "@playwright/test";
// List available options: https://playwright.dev/docs/test-configuration#browsers
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000", // Point to your Next.js app
    trace: "on-first-retry",
    headless: false, // Change this line
    // Wait up to 1s for each action (e.g. click, fill) to finish.
    actionTimeout: 1000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
