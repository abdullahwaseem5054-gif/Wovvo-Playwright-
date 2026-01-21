const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');

test('auth', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.open();
  await loginPage.login1('muhammad.abdullah.qa@thehexatown.com', 'test1234');

  await page.waitForFunction(() => {
    const item = localStorage.getItem('auth-storage');
    if (!item) return false;
    try {
      const data = JSON.parse(item);
      return data.state.session !== null;
    } catch {
      return false;
    }
  }, { timeout: 10000 });

  await page.context().storageState({ path: 'auth.json' });
  console.log('Auth saved with valid session!');
});
