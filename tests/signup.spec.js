import {test, expect} from '@playwright/test';
import SignupPage from '../pages/signup.js';

let signuppage;
test.beforeEach('Signup', async({page})=>{
    signuppage= new SignupPage(page);
    await signuppage.open1();
});

test.describe('SignUp', ()=>{
    test('Empty SignUp)', async()=>{
        await signuppage.signup1('','','','');
    });

    test('One Field Empty' , async()=>{
        await signuppage.signup1("Muhammad Abdullah","","test1234","test1234");

    });

    test('Password Mismatch Signup', async()=>{
        await signuppage.signup1("Muhammad Abdullah","test@test.com", "test1234","Test12345");
    })


});