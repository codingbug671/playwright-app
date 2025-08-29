const BasePage = require("./BasePage")

class PreferencesPage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.referenceInput = "input[id='[object Object]-referenceByCode']"
        this.scheduleTypeInput = "div[data-testid='input-select-preferredScheduleTypeCode']"
        this.scheduleTypeValue = "div[id='[object Object]-preferredScheduleTypeCode_list']"
        this.buttonTrainingDays = "button[data-testid='icademy-button-isMonday'] span"
        this.scheduleTypeItem = 'div[class="ant-select-item-option-content"] span[class="ant-badge-status-text"]'
        this.scheduleTypeTime = 'input[id="[object Object]-preferredSlotTimeSessionId"]'
        this.scheduleTypeTimeItem = 'div[class="ant-select-item-option-content"]'
        this.nextBtn = "button[data-testid='icademy-button-next']"
        this.preferredTestLanguage = 'input[id="[object Object]-rTATheoryTestLanguageCode"]'
        this.preferredEDILanguage = 'input[id="[object Object]-eDILecturesLanguageCode"]'
        this.preferredVoiceLanguage = 'input[id="[object Object]-voiceOverLanguageCode"]'
        this.preferredTrainingLanguage = 'input[id="[object Object]-preferredTrainingLanguageCode"]'
        this.isRISTranslated = 'input[id="[object Object]-isRISTranslated"]'
        
       
    }

    async enterGeneralInformation()
    {
      await this.waitAndDelay(this.referenceInput);
      await this.page.focus(this.referenceInput);
      await this.page.fill(this.referenceInput,"ADVERTISEMENT");
      await this.page.press(this.referenceInput, 'Enter');
      await this.waitAndDelay(this.scheduleTypeInput);
      await this.page.focus(this.scheduleTypeInput);
      await this.page.click(this.scheduleTypeInput);
      const firstScheduleTypeItem = this.page.locator(this.scheduleTypeItem).first();
      await firstScheduleTypeItem.waitFor({ state: 'visible' });
      await firstScheduleTypeItem.click();
      await this.waitAndDelay(this.buttonTrainingDays);
      await this.page.click(this.buttonTrainingDays);
      await this.waitAndDelay(this.scheduleTypeInput);
      await this.page.focus(this.scheduleTypeInput);
      await this.waitAndDelay(this.scheduleTypeTime);
      await this.page.click(this.scheduleTypeTime);
      const firstScheduleTypeTimeItem = this.page.locator(this.scheduleTypeTimeItem).first();
      await firstScheduleTypeTimeItem.waitFor({ state: 'visible' });
      await firstScheduleTypeTimeItem.click();
      await this.page.click(this.nextBtn);
    }

    async enterLanguagesInformation()
    {
      await this.waitAndDelay(this.preferredEDILanguage);
      await this.page.focus(this.preferredEDILanguage);
      await this.page.fill(this.preferredEDILanguage,"ENGLISH");
      await this.page.press(this.preferredEDILanguage, 'Enter');
      await this.waitAndDelay(this.preferredTestLanguage);
      await this.page.focus(this.preferredTestLanguage);
      await this.page.fill(this.preferredTestLanguage,"ENGLISH");
      await this.page.press(this.preferredTestLanguage, 'Enter');
      await this.waitAndDelay(this.preferredTrainingLanguage);
      await this.page.focus(this.preferredTrainingLanguage);
      await this.page.fill(this.preferredTrainingLanguage,"ENGLISH");
      await this.page.press(this.preferredTrainingLanguage, 'Enter');
      await this.waitAndDelay(this.preferredVoiceLanguage);
      await this.page.focus(this.preferredVoiceLanguage);
      await this.page.fill(this.preferredVoiceLanguage,"ENGLISH");
      await this.page.press(this.preferredVoiceLanguage, 'Enter');
       await this.waitAndDelay(this.isRISTranslated);
      await this.page.focus(this.isRISTranslated);
      await this.page.fill(this.isRISTranslated,"No");
      await this.page.press(this.isRISTranslated, 'Enter');
      await this.page.click(this.nextBtn);
    }

    async enterTransportationInformation()
    {
      await this.waitAndDelay(this.nextBtn);
      await this.page.click(this.nextBtn);
    
        
    }


  
  
  
}





module.exports = PreferencesPage;