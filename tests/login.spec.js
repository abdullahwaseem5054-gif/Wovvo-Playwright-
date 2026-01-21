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

  test('Invalid Login (Invalid Email Valid Password)', async ({page}) => {
    await loginPage.login1('muhammad.abdullah+1@thehexatown.com','Test1234');
    const response = await page.waitForResponse(
    res => res.url().includes('') && res.status() === 400
    );
    expect(response.status()).toBe(400);
  });

  test('Invalid Login (Valid Email Invalid Password)', async ({page}) => {
    await loginPage.login1('muhammad.abdullah.qa@thehexatown.com','hello');
    const response = await page.waitForResponse(
    res => res.url().includes('') && res.status() === 400
    );
    expect(response.status()).toBe(400);
  });

  test('Invalid Login (Invalid Email Invalid Password)', async ({page}) => {
    const user1= testData.login7.invalidUser;
    await loginPage.login1(user1.username, user1.password);
    const response = await page.waitForResponse(
    res => res.url().includes('') && res.status() === 400
    );
    expect(response.status()).toBe(400);
  });

  test('Empty Login', async ({page}) => {
    await loginPage.login1('', '');

    const emailValid = await page
    .locator('#signin-email')
    .evaluate(el => el.checkValidity());

     const passwordValid = await page
    .locator('#signin-password')
    .evaluate(el => el.checkValidity());

     expect(emailValid).toBe(false);
     expect(passwordValid).toBe(false);
  });

  test('Non-Registered User Login', async ({page}) => {
    await loginPage.login1('test@test.com', 'test123');
    const response = await page.waitForResponse(
    res => res.url().includes('') && res.status() === 400
    );
    expect(response.status()).toBe(400);
  });

  test('Ban User Login',async({page})=>{
    await loginPage.login1('muhammad.abdullah.qa+11111@thehexatown.com','test1234');
    const response = await page.waitForResponse(
    res => res.url().includes('') && res.status() === 400
    );
    expect(response.status()).toBe(400);
  })

});
