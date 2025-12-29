class SignupPage{
    constructor(page){
        this.page=page;
        this.signup=page.locator('//*[@id="radix-_R_kludb_-trigger-signup"]');
        this.fullname= page.locator('#signup-name');
        this.email= page.locator('#signup-email');
        this.password=page.locator('#signup-password');
        this.confirmpassword= page.locator('#signup-confirm-password');
        this.signupbtn=page.locator('button', { hasText: 'Create Account' });
    }

    async open1() {
    await this.page.goto('');
    await this.signup.click();
    }

    async signup1(fullname, email, password, comfirmpassword){
        await this.fullname.fill(fullname);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmpassword.fill(comfirmpassword);
        await this.signupbtn.click();

    }
}

module.exports =SignupPage;

