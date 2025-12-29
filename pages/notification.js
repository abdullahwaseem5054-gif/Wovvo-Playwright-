class notifications{
    constructor(page){
        this.page=page;
        this.n1=page.locator('xpath=/html/body/div[2]/div/div[2]/div[2]/div[1]/div/div[2]/label/div');
        this.dropdown= page.locator('xpath=/html/body/div[2]/div/div[2]/div[2]/div[2]/div/button');
        this.applyBtn = page.locator('button[data-slot="button"]', { hasText: 'Apply Settings' });
    }
     async open9() { 
        await this.page.goto('/notifications');
    }

    async notify(){
        await this.n1.click();
        await this.applyBtn.click();
    }

    async notify1(){
        await this.n1.click();
        await this.n1.click();
        await this.applyBtn.click();
    }
}
module.exports = notifications;