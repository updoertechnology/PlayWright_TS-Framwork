import { Locator, Page } from "playwright";
import Wrapper from "../support/Wrapper";

export default class LoginPage extends Wrapper {

    // NEED To Assign Variable Data Type As Locator
    readonly page: Page;
    readonly emailEl: Locator;
    readonly pwdEl: Locator;
    readonly continueBt: Locator
    readonly signInBt: Locator


    // PASS The Value of Locator
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailEl = page.locator('#ap_email');
        this.pwdEl = page.locator('#ap_password')
        this.continueBt = page.locator('css=input#continue')
        this.signInBt = page.locator('#signInSubmit')
    }

    async getTitlePage(){
        const actualTitle = await this.page.title()
        console.log('LoginPage.actualTitle: '+actualTitle)
    }

    // CREATE ASYNC Method of Each Locator
    async enterEmail(strUser: string) {
        await this.emailEl.fill(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.pwdEl.fill(strPwd)
    }
    async clickSignInBtn() {
        await this.signInBt.click()
    }
    async clickContinueBtn() {
        await this.continueBt.click()
    }

    // COMBINED Method
    async validLogin(strUser: string) {
        await this.enterEmail(strUser)
        await this.clickContinueBtn();
    }

}