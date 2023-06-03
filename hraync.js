const puppeteer = require('puppeteer');
const email = "kahitiv897@imdutex.com"
const passwd = "kahitiv@897"
const code = require("./codemodule.js")
const loginlink = "https://www.hackerrank.com/auth/login"

let page;
(async function()
{
    try{
        let browserInstance = await puppeteer.launch({
            headless: false,
            args: ['--start-maximized'],
            defaultViewport: null
        })
        let pages=await browserInstance.pages()
         let tab= pages[0];
         await tab.goto(loginlink);
        await tab.type("input[id='input-1']",email)
        await tab.type("input[id='input-2']",passwd)
        await tab.click("button[type='submit']");
        await waitandclick("a[data-attr1='algorithms']",tab);
        await waitandclick("input[type='checkbox'][value='warmup']",tab);
        let allchallanges=await tab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
        // console.log(allchallanges)
        
        await questionsolver(allchallanges[0],code.answers[0],tab)

    }
    catch(error){
                console.log(error);
    }
})()

async function waitandclick(selector,cpage)
{
    await cpage.waitForSelector(selector)
    return cpage.click(selector);
}
async function questionsolver(question,answer,page) {

    await question.click();
    await waitandclick(".monaco-editor.no-user-select.vs",page)
    await waitandclick(".css-1hwfws3",page)
    await page.type(".css-1hwfws3", "java 8");
    await  page.keyboard.press("Enter");
    await page.click("input[class='checkbox-input']")
    await waitandclick(".input.text-area.custominput.auto-width",page)
    await page.type(".input.text-area.custominput.auto-width", answer)
    await page.keyboard.down('Control',{delay :10});
    await  page.keyboard.press('A',{delay:200});
    await page.keyboard.press('X',{delay:200});
    await page.click(".monaco-editor.no-user-select.vs");
    await  page.keyboard.press('A',{delay:200});
    await page.keyboard.press('V',{delay:200});
    await page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
   
}