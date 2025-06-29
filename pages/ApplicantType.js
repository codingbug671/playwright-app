class ProductCategoryPage
{
    constructor(page)
    {
        this.page = page
        this.fullname = "input[data-testid='input-text-customer.englishFullName']"
        this.mobileno = "input[data-testid='input-phone-customer.mobile']"
        this.email = "input[data-testid='input-text-customer.email']"
        this.validateBtn = "button[data-testid='icademy-button']"
    }

    async addStudentPersonalDetails(name, mobileno, email)
    {
        await this.page.fill(this.fullname, name);
        await this.page.fill(this.mobileno, mobileno);
        await this.page.fill(this.email, email);
        await this.page.locator(this.validateBtn).nth(1).click();

    }
}


module.exports = ProductCategoryPage;