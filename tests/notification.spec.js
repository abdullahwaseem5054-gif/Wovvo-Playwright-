import {test, expect} from '@playwright/test';
const notifications = require('../pages/notification');

let notify2

test.beforeEach(async ({ page }) => {
  notify2 = new notifications(page);
  await notify2.open9();
});

test.use({ storageState: 'auth.json' });
test('Notification On', async({page})=>{
    await notify2.notify();

});


test('Notification Off', async({page})=>{
    notify2= new notifications(page);
    await notify2.notify1();

});