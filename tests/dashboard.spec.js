import{test, expect} from '@playwright/test';
import Dashboard from '../pages/dashboard.js';

test.use({ storageState: 'auth.json' });
test('dashboard search', async({page})=>{
  const dashboard7 = new Dashboard(page);

  await dashboard7.open();
  await dashboard7.favourite();

});

