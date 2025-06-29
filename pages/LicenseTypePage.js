class LicenseTypePage
{
    constructor(page)
    {
        this.page = page
       
    }

    async selectProduct(productTestId) {
    await this.page.click(`div[data-testid='${productTestId}']`);
    }

    async selectProductCategory(productCategoryTestId) {
    await this.page.click(`div[data-testid='${productCategoryTestId}']`);
  }


}


module.exports = LicenseTypePage;