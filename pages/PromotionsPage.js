class PromotionsPage
{
    constructor(page)
    {
        this.page = page
        this.packageInput = "div[data-testid='search-for-promotions-or-discounts'] input"
        this.packageDropdown = "div[class='ant-select-item-option-content']"
        this.nextBtn = "button[data-testid='icademy-button-next']"

       
    }

    async selectPackageInput() {
    
      await this.waitAndDelay(this.packageInput);
      await this.page.fill(this.packageInput,"REGULAR");
      await this.page.press(this.packageInput, 'Enter');
      const firstPackageItem = this.page.locator(this.firstPackageItem).first();
      await firstPackageItem.waitFor({ state: 'visible' });
      await firstPackageItem.click();
      await this.page.click(this.nextBtn);
    }
  


}


module.exports = PromotionsPage;