class StudentLoginPage
{
    constructor(page)
    {
        this.page = page
        this.createAccountBtn = "//button[@type='button']"
    }

    async createNewAccount()
    {
        await this.page.click(this.createAccountBtn)
    }
}


module.exports = StudentLoginPage;