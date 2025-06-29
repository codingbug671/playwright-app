const {test,expect} = require('@playwright/test');
const StudentLoginPage = require('../pages/StudentLoginPage')

test('Create New User Account', async({page})=>
{

    await page.goto('/');

    const studloginpage = new StudentLoginPage(page);
    await studloginpage.createNewAccount();
    await page.waitForTimeout(2000); // waits for 2 seconds






});