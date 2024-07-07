const { test, expect, chromium } = require('@playwright/test');

test.describe('E-commerce Site - Basic Flow', () => {
  test('Search, add to cart, and checkout', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the e-commerce site
    await page.goto('https://www.google.com');
    
  await page.click('.gLFyf')
    await page.fill('.gLFyf', 'Playwright testing');

    // Press 'Enter' to perform the search
    await page.press('.gLFyf', 'Enter');
  
    // Wait for the results to load
    await page.waitForSelector('h3');
  
    // Check that the first result contains the word 'Playwright'
    const firstResult = await page.textContent('h3');
    expect(firstResult).toContain('Playwright');
  
    // Optionally, take a screenshot of the results
    await page.screenshot({ path: 'google-search-results.png' });
    await browser.close();
  });
});
