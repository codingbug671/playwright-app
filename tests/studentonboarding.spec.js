const {test,expect} = require('@playwright/test');
const StudentLoginPage = require('../pages/StudentLoginPage')
const LicenseTypePage = require('../pages/LicenseTypePage');
const ApplicantTypePage = require('../pages/ApplicantType');
const LicenseTypeData = require('../testData/licenseType.json');

test('Onboard a new student', async({page})=>
{

    await page.goto('/');

    const studloginpage = new StudentLoginPage(page);
    const licenseTypePage = new LicenseTypePage(page);
    const product = LicenseTypeData.licenseType.product;
    const category = LicenseTypeData.licenseType.category;

  
    await studloginpage.createNewAccount();
    await licenseTypePage.selectProduct(product);
    await licenseTypePage.selectProductCategory(category);











});