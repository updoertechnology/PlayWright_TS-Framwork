import { After, AfterAll, BeforeAll, Status, setDefaultTimeout} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, devices } from 'playwright';
import { invokeBrowser } from "../helper/browsers/broswerManager";
import { getEnv } from "../helper/env/env";

let page: Page;
let browser: Browser;
let context : BrowserContext;

setDefaultTimeout(40 * 1000);

BeforeAll(async function(){
    getEnv();
    browser = await invokeBrowser();
});

After(async function(Scenario){
    if(Scenario.result!.status == Status.FAILED){
        await this.attach(await page.screenshot({ path: './screenshots/${Scenario.pickle.name}.png', fullPage: true }), "image/png");
    }
    await page.close();
    await context.close();    
});

AfterAll(async function (){
    await browser.close();
})

export { page, browser};
