import { test, expect } from "@playwright/test";

test("saucedemo.com bejelentekzés és kijelentkezés", async ({page}) => {
  await page.goto("https://www.saucedemo.com/");

  // CSS lokátorokat csak végső esetben hazsnáljunk!
  // await page.locator("#user-name").fill("standard_user");
  // await page.locator("#password").fill("secret_sauce");
  // await page.locator("#login-button").click();

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", {name: "Login"}).click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await page.getByRole("button", {name: "Open Menu"}).click();
  await page.getByRole("button", {name: "Logout"}).click();

  await expect(page).toHaveURL("https://www.saucedemo.com/");
});