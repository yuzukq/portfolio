import { test, expect } from '@playwright/test';

test('存在しないページで404が表示される', async ({ page }) => {
  await page.goto('/__no_such_page__');
  //
  // ページタイトルに404が含まれることを確認
  //await expect(page).toHaveTitle(/404:This page could not be found/);
  
  // 404の見出しが表示されることを確404: This page could not be found.
  await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'This page could not be found.' })).toBeVisible();
});
