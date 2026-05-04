import { shortest } from '@antiwork/shortest';

shortest('Verify the homepage loads', async ({ page }) => {
  // Use the environment variable passed from the action
  await page.goto(process.env.BASE_URL || 'https://example.com');
  
  // The AI will look for these elements based on the string description
  await shortest('Click on the login button and check for the email field');
});
