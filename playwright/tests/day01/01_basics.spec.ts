import { test, expect, chromium} from "@playwright/test";

test("Playwright folyamatt felépítése", async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://playwright.dev/");

  // ezt a várakozást soha ne használjuk!
  await page.waitForTimeout(2000);

  await browser.close();

});

// ez itt a valós életszerű példa
test("Beépített fixture használata", async ({page}) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveURL("https://playwright.dev/");
  // await expect(page).toHaveTitle("Playwright");
});