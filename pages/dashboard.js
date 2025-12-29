class Dashboard{
    constructor(page){
        this.page=page;
        this.search= page.locator('//*[@id="jobfeed-search"]/input');
        this.taketour = page.locator('xpath=/html/body/div[2]/div/div[1]/div/div/button[1]');
        this.tour1= page.locator('//*[@id="driver-popover-content"]/footer/span[2]/button[2]');
        this.tour2=page.locator('//*[@id="driver-popover-content"]/button');
        this.platformfilter=page.getByRole('button', { name: 'Select platforms' });
        this.Pfilter1=page.getByRole('menuitemcheckbox', { name: 'Aspire.io' });
        this.Pfilter2=page.getByRole('menuitemcheckbox', { name: 'Other' });
        this.locationfilter=page.getByRole('button', { name: /^Select Location/ });
        this.Lfilter1=page.getByRole('menuitemcheckbox', { name: 'USA' });
        this.Lfilter2=page.getByRole('menuitemcheckbox', { name: 'Other' });
        this.niche=page.getByRole('button', { name: 'Niche' });
        this.niche1=page.getByRole('menuitemcheckbox', { name: 'Education' });
        this.niche2=page.getByRole('menuitemcheckbox', { name: 'Fashion' });
        this.niche3=page.getByRole('menuitemcheckbox', { name: 'Travel' });
        this.compensation=page.getByRole('button', { name: 'Select Compensation' });
        this.compensation1=page.getByRole('menuitemcheckbox', { name: 'Unknown' });
        this.clearButton = page.getByRole('button', { name: /^Clear all/ });
        this.fav=page.locator('svg.lucide-heart.cursor-pointer').nth(0);
        this.fav1=page.locator('svg.lucide-heart.cursor-pointer').nth(1);
        this.fav2=page.locator('svg.lucide-heart.cursor-pointer').nth(8);
    }
    async open(){
        await this.page.goto('/job-feed');
    }
    

    async dashboard1(ugc) {
    await this.search.click();
    await this.search.fill(ugc);
    }

    async taketour00(){
    await this.taketour.click();
    await this.tour1.click();
    await this.tour2.click();
    }
    
    async filters00(){
    if (await this.clearButton.count() > 0) 
    { 
       await this.clearButton.click(); 
    }
    await this.platformfilter.click();
    await this.Pfilter1.click();
    await this.Pfilter2.click();
    await this.page.keyboard.press('Escape');
    await this.locationfilter.click();
    await this.Lfilter1.click();
    await this.Lfilter2.click();
    await this.page.keyboard.press('Escape');
    await this.niche.click();
    await this.niche1.click();
    await this.niche2.click();
    await this.niche3.click(); 
    await this.page.keyboard.press('Escape');
    await this.compensation.click();
    await this.compensation1.click();
    await this.page.keyboard.press('Escape');
    }

    async favourite(){
        await this.fav.click();
        await this.fav.click();
        await this.fav1.click();
        await this.fav2.click();

    }
}
module.exports=Dashboard;
