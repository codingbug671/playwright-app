const BasePage = require("./BasePage")

class PromotionsPage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.packageInput = "div[data-testid='search-for-promotions-or-discounts'] input"
        this.packageDropdown = "div[class='ant-select-item-option-content']"
        this.nextBtn = "button[data-testid='icademy-button-next']"
        this.loader = "span[class='anticon rotate']"

       
    }

    async selectPackageInput() {
    
      await this.page.waitForSelector(this.loader, { state: 'hidden' });
      await this.waitAndDelay(this.packageInput);
      await this.page.fill(this.packageInput,"REGULAR");
      await this.page.waitForTimeout(2000);
      const firstPackageItem = this.page.locator(this.packageDropdown).first();
      await firstPackageItem.waitFor({ state: 'visible' });
      await firstPackageItem.click();
      await this.page.click(this.nextBtn);
      await this.page.waitForTimeout(2000);
    }
  


}


module.exports = PromotionsPage;