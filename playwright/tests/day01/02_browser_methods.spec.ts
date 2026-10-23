import { test, expect } from "@playwright/test";

test("Beépített fixture használata", async ({page}) => {
  await page.goto("https://playwright.dev/");

  console.log("Jelenlegi URL, nem vár rá a playwrigt, nem aszinkron", page.url());

  // ezt a formát használjuk, a .toAHveURL várakozik az URL-re
  await expect(page).toHaveURL("https://playwright.dev/");
  // await expect(page).toHaveTitle("Playwright");

  // várunk az oldalra
  await page.goto("http://hotel-v3.progmasters.hu/");

  // várunk az url-re
  await expect(page).toHaveURL("http://hotel-v3.progmasters.hu/");

  // screenshot készítés
  await page.screenshot({
    path: "screens/hotel_lathato_resz.png"
  });

  await page.screenshot({
    path: "screens/hotel_full_kepernyo.png",
    fullPage: true
  });

  // böngésző vissza gomb
  await page.goBack();
  await expect(page).toHaveURL("https://playwright.dev/");

  // böngésző előre gob
  await page.goForward();
  await expect(page).toHaveURL("http://hotel-v3.progmasters.hu/");

  // böngésző frissitése
  await page.reload();
  await expect(page).toHaveURL("http://hotel-v3.progmasters.hu/");

});