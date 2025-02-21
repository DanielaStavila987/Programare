import { test, expect } from '@playwright/test';
import { testUsers, isValidEmail } from '../utils/testUsers.js';

test.describe('Autentificare utilizatori', () => {
  for (const user of testUsers) {
    test(`Test autentificare pentru ${user.username}`, async ({ page }) => {
      await page.goto('http://127.0.0.1:8080/index1.html');

 

      await page.fill('input[name="username"]', user.username);
      await page.fill('input[name="password"]', user.password);
      await page.fill('input[name="email"]', user.email);
      await page.click('button[type="submit"]');

      if (isValidEmail(user.email)) {
        // Dacă emailul este valid, verificăm dacă autentificarea reușește
        await expect(page.locator('.success-message')).toBeVisible();
      } else {
        // Dacă emailul este invalid, verificăm afișarea mesajului de eroare
        await page.locator('.error-message').waitFor({ state: 'visible', timeout: 20000 });;

      }
    });
  }
});
