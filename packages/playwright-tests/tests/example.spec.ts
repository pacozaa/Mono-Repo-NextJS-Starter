import { test, expect } from "@playwright/test";

// Home Page Tests
test.describe('Home Page', () => {
  test("has correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Next.js App");
  });

  test("displays Next.js logo", async ({ page }) => {
    await page.goto("/");
    const logo = page.getByAltText("Next.js logo");
    await expect(logo).toBeVisible();
  });

  test("contains deployment links", async ({ page }) => {
    await page.goto("/");
    const deployButton = page.getByText("Deploy now");
    const docsButton = page.getByText("Read our docs");
    await expect(deployButton).toBeVisible();
    await expect(docsButton).toBeVisible();
  });
});

// Page 1 Tests
test.describe('Page 1', () => {
  test("navigates to page 1", async ({ page }) => {
    await page.goto("/page1");
    await expect(page).toHaveURL("/page1");
  });

  test("displays correct title", async ({ page }) => {
    await page.goto("/page1");
    const title = page.getByText("Page 1");
    await expect(title).toBeVisible();
  });

  test("shows card with description", async ({ page }) => {
    await page.goto("/page1");
    const description = page.getByText("This is Page 1 of our Next.js application.");
    await expect(description).toBeVisible();
  });
});

// Page 2 Tests
test.describe('Page 2', () => {
  test("navigates to page 2", async ({ page }) => {
    await page.goto("/page2");
    await expect(page).toHaveURL("/page2");
  });

  test("displays correct title", async ({ page }) => {
    await page.goto("/page2");
    const title = page.getByText("Page 2");
    await expect(title).toBeVisible();
  });

  test("shows card with description", async ({ page }) => {
    await page.goto("/page2");
    const description = page.getByText("This is Page 2 of our Next.js application.");
    await expect(description).toBeVisible();
  });
});
