class DrivingLicensePage
{
    constructor(page)
    {
        this.page = page
        this.button = "button[data-testid='icademy-button']"
        this.nextBtn = "button[data-testid='icademy-button-next']"
       
    }

    async enterExistingDrivingLicenseInfo(type) {
      switch (type) {
      case 'Yes':
      // perform actions if type is 'Yes'
        await this.page.locator(this.button).nth(1).click({ force: true });
        await this.page.waitForTimeout(300);
        await this.page.click(this.nextBtn);
      break;

      case 'No':
      //perform actions if type is 'No'
        await this.page.locator(this.button).nth(2).click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.page.click(this.nextBtn);
        await this.page.waitForTimeout(1000);
      break;

      default:
        console.warn(`Unknown type: ${type}`);
      break;
      }
    }

    async enterUAEExistingDrivingLicenseInfo(type) {
      switch (type) {
      case 'Yes':
      // perform actions if type is 'Yes'
        await this.page.locator(this.button).nth(1).click({ force: true });
       await this.page.waitForTimeout(1000);
        await this.page.click(this.nextBtn);
      break;

      case 'No':
      // perform actions if type is 'No'
        await this.page.locator(this.button).nth(2).click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.page.click(this.nextBtn);
      break;

      default:
        console.warn(`Unknown type: ${type}`);
      break;
      }
    }

  


}


module.exports = DrivingLicensePage;