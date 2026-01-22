class EditProfile{
    constructor(page){
        this.page=page;
        this.dropdown=page.locator('//*[@id="radix-_r_g_"]');
        this.editprofilebtn=page.locator('#edit-profile');
        this.firstname= page.locator('#firstName');
        this.lastname=page.locator('#lastName');
        this.save=page.getByText('Save Changes');
    
    }

    async open2() { 
        await this.page.goto('/profile');
    }

    async edit(firstname,lastname){
        await this.firstname.click();
        await this.firstname.clear();
        await this.firstname.fill(firstname);
        await this.lastname.click();
        await this.lastname.clear();
        await this.lastname.fill(lastname);
        await this.save.click();
    }  
    
}
module.exports=EditProfile;
