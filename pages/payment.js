class Payment{
    constructor(page){
        this.page= page;
        this.cardNumberInput = page.locator('input[name="cardNumber"]');
        this.expiryInput = page.locator('input[name="cardExpiry"]');
        this.cvcInput = page.locator('input[name="cardCvc"]');
        this.nameInput = page.locator('input[name="billingName"]');
        this.termsCheckbox = page.locator('input[name="termsOfServiceConsentCheckbox"]');
        this.submitBtn = page.locator('button[type="submit"]');
    }

    async payment(){
        await this.page.goto('https://checkout.stripe.com/c/pay/cs_test_a1GnHGQiaaJV6yunRqQwFfPQG54pXCJ4LQB8IWNyzouqRYX0xGY6MEOSmx#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blpxYHZxWjA0VlRLTj1MR1ZOcGhnfWdoUW1xXFFScH9BaUZgPV1SdEhPVnBAXEI8bnFRNzR2UUxMf09iQ09Qcn9fZHR1MWJ3TWpRSUhMVDxvbFVhYkpyfG5QaE58fVViNTVnNFxQZHVsRicpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl')
    }

    async fill(cnumber, expiry, cvc, name){
        await this.cardNumberInput.click();
        await this.cardNumberInput.fill(cnumber);
        await this.expiryInput.click();
        await this.expiryInput.fill(expiry);
        await this.cvcInput.click();
        await this.cvcInput.fill(cvc);
        await this.nameInput.click();
        await this.nameInput.fill(name);
        await this.termsCheckbox.click();
        await this.submitBtn.click();

    }

}

module.exports= Payment;
