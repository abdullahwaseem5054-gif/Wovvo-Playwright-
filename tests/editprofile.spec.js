import {test,expect} from '@playwright/test';
import EditProfile from '../pages/editprofile';

test.use({ storageState: 'auth.json' });
test('edit profile', async({page})=>{
    const editprofile1=new EditProfile(page);
    await editprofile1.open2();
    await editprofile1.edit('Muhammad','Abdullah(SQA Engineer)');
    await expect(page.getByText('Profile updated successfully!')).toBeVisible();
});