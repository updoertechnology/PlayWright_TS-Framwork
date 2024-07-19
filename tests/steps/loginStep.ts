import { Given, When, Then } from '@cucumber/cucumber'

import { Browser, BrowserContext, Page, devices } from 'playwright';
import HomePage from '../../page-objects/HomePage';

let page: Page;
let browser: Browser;
let context : BrowserContext;

When('User Launch a {string}', async (BroswerType: string) => {
    try {
        switch (BroswerType) {
            case "Web Browser":
                context = await browser.newContext({ viewport: null });
                // page = await context.newPage();
                break;
            case "Mobile Browser":
                context = await browser.newContext({ viewport: devices['Pixel 5'].viewport });
                // page = await context.newPage();
                break;
            
        } 
        page = await context.newPage()
    } catch (error) {
        console.error('Error during browser setup:', error);
        throw error; 
    }
});

Given('User Navigate To HomePage', async () => {
    
    await page.goto(process.env.URL);
    await page.waitForTimeout(3000);
    await new HomePage(page).getTitlePage();
});


When('User Click on Hello SignIn Button', async ()=>{

    // await homepage.clickHelloSignInBtn();

})


Then('User Enter Email From LoginPage', async ({loginPage}) => {
   
    await loginPage.getTitlePage()
    await loginPage.enterEmail(process.env.USERNAME);
    
    // await new LoginPage(page).getTitlePage();
    // await new LoginPage(page).enterEmail(process.env.USERNAME);

})


Then('User Click on Continue Button', async ({loginPage}) => {

    await loginPage.clickContinueBtn();
})


Then('User Enter Password', async ({loginPage})=>{

    await loginPage.enterPassword(process.env.PASSWORD);

})


Then('User click on SignIn Button', async ({loginPage})=> {

    await loginPage.clickSignInBtn();

})