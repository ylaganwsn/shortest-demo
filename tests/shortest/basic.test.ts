import { shortest } from '@antiwork/shortest';

const BASE_URL = process.env.BASE_URL || 'https://example.com';

shortest('Verify the homepage loads', async ({ page }) => {
  await page.goto(BASE_URL);
});
