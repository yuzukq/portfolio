import { test, expect } from '@playwright/test';

test('ブログ一覧ページが正しく表示される', async ({ page }) => {
  await page.goto('http://localhost:3000/blog');
  
  // ページタイトルの確認
  await expect(page).toHaveTitle('Yuzu portfolio');
  
  // ブログ一覧の見出しを確認
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
  
  // ブログ記事カードが存在することを確認
  const blogLinks = page.locator('a[href^="/blog/"]');
  const count = await blogLinks.count();
  expect(count).toBeGreaterThan(0);
});

test('ブログ一覧から詳細ページへ遷移できる', async ({ page }) => {
  await page.goto('http://localhost:3000/blog');

  // 最初のブログ記事リンクを取得
  const firstBlogLink = page.locator('a[href^="/blog/"]').first();
  await expect(firstBlogLink).toBeVisible();
  
  const href = await firstBlogLink.getAttribute('href');
  await firstBlogLink.click();
  
  // 詳細ページに遷移したことを確認
  await expect(page).toHaveURL(`http://localhost:3000${href}`);
  
  // 記事のタイトル（h2）が表示されることを確認
  await expect(page.locator('h2').first()).toBeVisible();
});

test('ブログ詳細ページから一覧に戻れる', async ({ page }) => {
  // 既知のブログ記事ページに直接アクセス
  await page.goto('http://localhost:3000/blog/vr-seminar');
  
  // 「一覧に戻る」ボタンを探してクリック
  const backButton = page.getByRole('button', { name: '一覧に戻る' });
  await expect(backButton).toBeVisible();
  await backButton.click();
  
  // ブログ一覧ページに戻ったことを確認
  await expect(page).toHaveURL('http://localhost:3000/blog');
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
});
