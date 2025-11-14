import { test, expect } from '@playwright/test';

test('トップページが主要セクションを表示できる', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // ページタイトルの確認
  await expect(page).toHaveTitle('Yuzu portfolio');
  
  // メインビジュアルの見出しを確認
  await expect(page.getByRole('heading', { name: 'Thank you for your visit !' })).toBeVisible();
  
  // 主要セクションの見出しを確認
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'My Story' })).toBeVisible();
});
