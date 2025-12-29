class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#signin-email');
    this.password = page.locator('#signin-password');
    this.login = page.locator('[data-slot="button"]:has-text("Sign In")');
  }

  async open() {
    await this.page.goto('');
  }

  async login1(email, password) { 
    await this.email.fill(email);
    await this.password.fill(password);
    await this.login.click();
  }
}

module.exports =  LoginPage;