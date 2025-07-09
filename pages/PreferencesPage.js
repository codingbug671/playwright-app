class PreferencesPage
{
    constructor(page)
    {
        this.page = page
        this.referenceInput = "input[id='[object Object]-referenceByCode']"
        this.scheduleTypeInput = "div[data-testid='input-select-preferredScheduleTypeCode']"
        this.scheduleTypeValue = "div[id='[object Object]-preferredScheduleTypeCode_list']"
        this.buttonTrainingDays = "button[data-testid='icademy-button-isMonday'] span"
        this.scheduleTypeItem = 'div[class="ant-select-item-option-content"]'
        this.scheduleTypeTime = 'input[id="[object Object]-preferredSlotTimeSessionId"]'
        this.scheduleTypeTimeItem = 'div[id="[object Object]-preferredSlotTimeSessionId_list_0"]'
        this.nextBtn = "button[data-testid='icademy-button-next']"
        this.preferredTestLanguage = 'input[id="[object Object]-rTATheoryTestLanguageCode"]'
        this.preferredEDILanguage = 'input[id="[object Object]-eDILecturesLanguageCode"]'
        this.preferredVoiceLanguage = 'input[id="[object Object]-voiceOverLanguageCode"]'
        this.preferredTrainingLanguage = 'input[id="[object Object]-preferredTrainingLanguageCode"]'
        
       
    }

    async enterGeneralInformation()
    {
      await this.page.fill(this.referenceInput,"ADVERTISEMENT");
      await this.page.press(this.referenceInput, 'Enter');
      await this.page.click(this.scheduleTypeInput);
      await this.page.click(this.scheduleTypeItem);
      await this.page.click(this.buttonTrainingDays);
      await this.page.click(this.scheduleTypeTime);
      await this.page.click(this.scheduleTypeTimeItem);
      await this.page.click(this.nextBtn);
    }

    async enterLanguagesInformation()
    {
      await this.page.fill(this.preferredEDILanguage,"ENGLISH");
      await this.page.fill(this.preferredTestLanguage,"ENGLISH");
      await this.page.fill(this.preferredTrainingLanguage,"ENGLISH");
      await this.page.fill(this.preferredVoiceLanguage,"ENGLISH");
    }
  
  
  
}





module.exports = PreferencesPage;