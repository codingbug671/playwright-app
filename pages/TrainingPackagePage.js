const BasePage = require("./BasePage")

class TrainingPackagePage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.packageBtn = "div[class='ant-modal-body'] button"
        this.nextBtn = "button[data-testid='icademy-button-next']"
        this.loader = "span[class='anticon rotate']"

       
    }

    async selectTrainingPackage() {
    
      await this.page.click(this.packageBtn);
      await this.waitAndDelay(this.nextBtn);
      await this.page.click(this.nextBtn);
      await this.waitAndDelay(this.nextBtn);
      await this.page.click(this.nextBtn);
      await this.waitAndDelay(this.nextBtn);
      await this.page.click(this.nextBtn);
      await this.waitAndDelay(this.nextBtn);
      await this.page.click(this.nextBtn);
      await this.waitAndDelay(this.nextBtn);
      await this.page.click(this.nextBtn);

    }
  


}


module.exports = TrainingPackagePage;