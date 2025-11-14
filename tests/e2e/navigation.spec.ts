import { test, expect } from '@playwright/test';

test('About meセクションの「ブログを読む」ボタンでブログ一覧へ遷移できる', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // 「ブログを読む」ボタンを探してクリック
  const blogButton = page.getByRole('button', { name: 'ブログを読む' });
  await expect(blogButton).toBeVisible();
  await blogButton.click();
  
  // ブログページに遷移したことを確認
  await expect(page).toHaveURL('http://localhost:3000/blog');
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
});

test('ブログページのヘッダーからProfileリンクでトップページに戻れる', async ({ page }) => {
  await page.goto('http://localhost:3000/blog');
  
  // Profileボタンをクリック
  const profileButton = page.getByRole('button', { name: 'Profile' });
  await expect(profileButton).toBeVisible();
  await profileButton.click();
  
  // トップページのAboutセクションに遷移することを確認
  await expect(page).toHaveURL('http://localhost:3000/#about');
});
