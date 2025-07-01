const {test,expect} = require('@playwright/test');
const StudentLoginPage = require('../pages/StudentLoginPage')
const LicenseTypePage = require('../pages/LicenseTypePage');
const ApplicantTypePage = require('../pages/ApplicantType');
const LicenseTypeData = require('../testData/licenseType.json');
const ApplicantTypeData = require("../testData/applicantDetails.json");
const DrivingLicensePage = require("../pages/DrivingLicensePage");
const LocationPage = require("../pages/LocationPage")


test('Onboard a new student', async({page})=>
{

    await page.goto('/');

    const studloginpage = new StudentLoginPage(page);
    const licensetypepage = new LicenseTypePage(page);
    const drivinglicensepage = new DrivingLicensePage(page);
    const locationpage = new LocationPage(page);
    
    const product = LicenseTypeData.licenseType.product;
    const category = LicenseTypeData.licenseType.category;
    const applicanttypepage = new ApplicantTypePage(page);
    const applicant = ApplicantTypeData.applicantDetails;
   
  
  
    await studloginpage.createNewAccount();
    await licensetypepage.selectProduct(product);
    await licensetypepage.selectProductCategory(category);
    await applicanttypepage.addStudentPersonalDetails(applicant);
    await applicanttypepage.addStudentIdentityDetails(applicant);
    await applicanttypepage.addAdditionalInformation(applicant);
    await drivinglicensepage.enterExistingDrivingLicenseInfo("No");
    await drivinglicensepage.enterUAEExistingDrivingLicenseInfo("No");
    await locationpage.selectTrainingLocation(applicant);










});