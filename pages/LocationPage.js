class LocationPage
{
    constructor(page)
    {
        this.page = page
        this.locationinput = "div[data-testid='select-location-header'] input"
        this.nextBtn = "button[data-testid='icademy-button-next']"
       
    }

    async selectTrainingLocation(applicant) {
      await this.page.waitForTimeout(3000);
      await this.page.fill(this.locationinput,applicant.location);
      await this.page.press(this.locationinput, 'Enter');
      await this.page.click(this.nextBtn);
    }

    
  


}


module.exports = LocationPage;