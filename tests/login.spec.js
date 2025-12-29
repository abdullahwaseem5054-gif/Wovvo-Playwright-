import { test,expect } from '@playwright/test';
import LoginPage from '../pages/login.js';
import testData from '../testData.json';

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.open();
});

test.describe('Login Test', () => {

  test('Valid Login', async ({page}) => {
    const user = testData.login7.validUser;
    await loginPage.login1(user.username, user.password);
    await expect(page).toHaveURL('/job-feed');
  });

  test('Invalid Login (Invalid Email Valid Password)', async () => {
    await loginPage.login1(
      'muhammad.abdullah+1@thehexatown.com',
      'Test1234'
    );
  });

  test('Invalid Login (Valid Email Invalid Password)', async () => {
    await loginPage.login1(
      'muhammad.abdullah.qa@thehexatown.com',
      'hello'
    );
  });

  test('Invalid Login (Invalid Email Invalid Password)', async () => {
    const user1= testData.login7.invalidUser;
    await loginPage.login1(user1.username, user1.password);
  });

  test('Empty Login', async () => {
    await loginPage.login1('', '');
  });

  test('Non-Registered User Login', async () => {
    await loginPage.login1('test@test.com', 'test123');
  });

});
