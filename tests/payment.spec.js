import {test, expect} from '@playwright/test';
import Payment from '../pages/payment.js';
let t1;
test('Open Stripe Payment Screen', async({page})=>{
    t1= new Payment(page);
    await t1.payment();
    await t1.fill('4242424242424242','12/28','123','Muhammad Abdullah').use({ browserName: 'chromium' });

});