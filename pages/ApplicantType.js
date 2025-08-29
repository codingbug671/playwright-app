const { expect } = require('@playwright/test');
const { appendFileSync } = require('fs');


class ProductCategoryPage
{
    constructor(page)
    {
        this.page = page
        this.fullname = "input[data-testid='input-text-customer.englishFullName']"
        this.mobileno = "input[data-testid='input-phone-customer.mobile']"
        this.email = "input[data-testid='input-text-customer.email']"
        this.validateBtn = "button[data-testid='icademy-button']"
        this.otpinput = "div[data-testid='verify-form'] input"
        this.otpvalidateBtn = "button[type='submit']"
        this.nextBtn = "button[data-testid='icademy-button-next']"
        this.okayBtn = "div[data-testid='verify-form'] button[data-testid='icademy-button']"
        this.emiratesId = "input[data-testid='input-text-customer.emiratesId']"
        this.visaProfession = "input[id='[object Object]-customer.professionCode']"
        this.visaType = "input[id='[object Object]-customer.visaTypeCode']"
        this.emiratesIdFront = "input[data-testid='input-upload-field-customer.frontEmiratesId']"
        this.emiratesIdBack = "input[data-testid='input-upload-field-customer.backEmiratesId']"
        this.issueDate = "input[data-testid='input-date-picker-customer.emiratesIdIssueDate']"
        this.expiryDate = "input[data-testid='input-date-picker-customer.emiratesIdExpiry']"
        this.nationality = "input[id='[object Object]-customer.nationalityCode']"
        this.birthDate = "input[data-testid='input-date-picker-customer.birthDate']"
        this.gender = "input[id='[object Object]-customer.genderCode']"
    }

    async addStudentPersonalDetails(applicant)
    {
        await this.page.fill(this.fullname, applicant.name);
        await this.page.fill(this.mobileno, applicant.mobileno);
        await this.page.fill(this.email, applicant.email);
        await this.page.locator(this.validateBtn).nth(1).click();
        await this.page.waitForTimeout(1000);
      //  await this.inputOTPValue()
        //await this.page.locator(this.validateBtn).nth(2).click();
        //await this.inputOTPValue()
        await this.page.click(this.nextBtn);

    }

    async inputOTPValue()
    {
        // const otp = '123456';
        // const inputs = this.page.locator(this.otpinput);

        // for (let i = 0; i < otp.length; i++) {
        //     await inputs.nth(i).fill(otp[i]);
        // }

        await this.page.waitForTimeout(30000);
        await this.page.click(this.otpvalidateBtn);
        await this.page.waitForTimeout(1000);
        await this.page.click(this.okayBtn, { force: true });

    }

    async addStudentIdentityDetails(applicant)
    {
        const random14Digit = Math.floor(10000000000000 + Math.random() * 90000000000000);
        console.log(random14Digit);

        const path = require('path');
        const emiratesId = `784-${random14Digit}`;

        const filePath = path.resolve(__dirname, '../multimedia/Screenshot (1).png');
        await this.page.waitForLoadState('load');
        const idField = this.page.locator(this.emiratesId);
        await idField.waitFor({ state: 'visible' });
        //await idField.waitFor({ state: 'editable' });
        await idField.fill(emiratesId.toString());
       // await this.page.waitForLoadState('load');
       // await this.page.locator(this.emiratesId).waitFor({ state: 'visible' });
       // await this.page.locator(this.emiratesId).type(emiratesId.toString(), { delay: 100 });
        await this.page.waitForTimeout(1000);
        await this.page.fill(this.visaProfession,applicant.visaProfession);
        await this.page.press(this.visaProfession, 'Enter');
        await this.page.fill(this.visaType, applicant.visaType);
        await this.page.press(this.visaType, 'Enter');
        await this.page.click(this.issueDate);
        await this.page.keyboard.type(applicant.issueDate);
        await this.page.keyboard.press('Enter');
        await this.page.click(this.expiryDate);
        await this.page.keyboard.type(applicant.expiryDate);
        await this.page.keyboard.press('Enter');
        await this.page.setInputFiles(this.emiratesIdBack, filePath);
        await this.page.setInputFiles(this.emiratesIdFront, filePath);
        await this.page.click(this.nextBtn);

    }

     async addAdditionalInformation(applicant)
    {
        await this.page.fill(this.nationality, applicant.nationality);
        await this.page.press(this.nationality, 'Enter');
        await this.page.click(this.birthDate);
        await this.page.keyboard.type(applicant.birthDate);
        await this.page.keyboard.press('Enter');
        await this.page.fill(this.gender, applicant.gender);
        await this.page.press(this.gender, 'Enter');
        await this.page.click(this.nextBtn);

    }


}


module.exports = ProductCategoryPage;