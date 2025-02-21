import { test, expect } from '@playwright/test';

const testConfig = {
  url: 'file:///C:/Users/savil/OneDrive/Desktop/progr%20web/index.html', 
  user: {
    username: 'testUser', // username-ul
    password: 'securePassword' // parola
  },
  timeout: 5000
};

test('Autentificare cu date corecte', async ({ page }) => {
  await page.goto(testConfig.url, { timeout: testConfig.timeout });

})
