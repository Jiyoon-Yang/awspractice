import { test, expect } from "@playwright/test";

test("페이지 이동 시나리오", async ({ page }) => {
  await page.goto("section23/23-04-playwright-e2e-test");

  await page.click("text=페이지이동하기");

  await expect(page).toHaveURL("section23/23-04-playwright-e2e-test-moved");

  await expect(page.locator("h1")).toContainText("철수야 놀자~!@");
});
