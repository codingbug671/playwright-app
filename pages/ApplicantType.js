class ProductCategoryPage
{
    constructor(page)
    {
        this.page = page
        this.lmvaBtn = "div[data-testid='LMVA']"
    }

    async selectLightVehicleAutomaticCar()
    {
        await this.page.click(this.lmvaBtn)
    }
}


module.exports = ProductCategoryPage;