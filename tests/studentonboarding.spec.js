const {test,expect} = require('@playwright/test');
const StudentLoginPage = require('../pages/StudentLoginPage')
const LicenseTypePage = require('../pages/LicenseTypePage');
const ApplicantTypePage = require('../pages/ApplicantType');
const LicenseTypeData = require('../testData/licenseType.json');


test('Onboard a new student', async({page})=>
{

    await page.goto('/');

    const studloginpage = new StudentLoginPage(page);
    const licensetypepage = new LicenseTypePage(page);
    const product = LicenseTypeData.licenseType.product;
    const category = LicenseTypeData.licenseType.category;
    const applicanttypepage = new ApplicantTypePage(page);

  
    await studloginpage.createNewAccount();
    await licensetypepage.selectProduct(product);
    await licensetypepage.selectProductCategory(category);
    await applicanttypepage.addStudentPersonalDetails("testuser","971504097652","abc@gmail.com");











});