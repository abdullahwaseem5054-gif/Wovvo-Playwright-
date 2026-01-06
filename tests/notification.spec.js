import {test, expect} from '@playwright/test';
const Notifications = require('../pages/notification');

test.use({ storageState: 'auth.json' });
let notify2;
test('Notification', async({page}) =>{
    notify2= new Notifications(page);
    await notify2.openPage();
    await expect(page).toHaveURL('/notifications');
    await notify2.notification();
});