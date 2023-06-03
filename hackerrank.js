const puppeteer = require('puppeteer');
const email = "kahitiv897@imdutex.com"
const passwd = "kahitiv@897"
const code = require("./codemodule.js")
const loginlink = "https://www.hackerrank.com/auth/login"
let browseropenpromise = puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
});
let page;
browseropenpromise.then(function (browserobj) {
    // let newtabpage=browserobj.newPage();
    // return newtabpage;
    const pagearraypromise = browserobj.pages(); // gives currently opened tab
    return pagearraypromise;
}).then(function (newtab) {
    page = newtab[0];
    return page.goto(loginlink);
}).then(function () {   // waiting for the element to appear on the page
    let elementwaitpromise = page.waitForSelector("input[id='input-1']", { visible: true });
    return elementwaitpromise;
})
    .then(function () {
        return page.type("input[id='input-1']", email);
    }).then(function () {
        return page.type("input[id='input-2']", passwd);
    }).then(function () {
        return page.click("button[type='submit']");
        // button[type='submit']
    }).then(function () {   // waiting for the element to appear on the page
        let elementwaitpromise = page.waitForSelector("a[data-attr1='algorithms']");
        return elementwaitpromise;
    }).then(function () {
        // a[data-attr1='algorithms']
        return page.click("a[data-attr1='algorithms']");
    }).then(function () {   // waiting for the element to appear on the page
        let elementwaitpromise = page.waitForSelector("input[type='checkbox'][value='warmup']");
        return elementwaitpromise;
    })
    .then(function () {
        // input[type='checkbox'][value='warmup']
        return page.click("input[type='checkbox'][value='warmup']");
    }).then(function () {
        return page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
    }).then(function () {
        return page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
    }).then(function (arr) {
        return questionsolver(arr[0],code.answers[0],{delay:10});

    })
    
    .catch(function (err) {
        console.log(err)
    })

function questionsolver(question,answer) {
    return new Promise(function (resolve, reject) {
        question.click().then(function () {
            return page.waitForSelector(".monaco-editor.no-user-select.vs");
            // 
        })
            .then(function () {
                return page.waitForSelector(".css-1hwfws3");
                // 
            })
            .then(function () {

                return page.click(".css-1hwfws3");

            }).then(function () {
                return page.type(".css-1hwfws3", "java 8")

            }).then(function () {
                page.keyboard.press("Enter");
            })
            .then(function () {
                return page.click("input[class='checkbox-input']")// input[class='checkbox-input']
            })
            .then(function () {
                return page.waitForSelector(".input.text-area.custominput.auto-width");
            }).then(function () {

                return page.click(".input.text-area.custominput.auto-width");

            }).then(function () {
                return page.type(".input.text-area.custominput.auto-width", answer)
            }).then(function()
            {
                return page.keyboard.down('Control',{delay :10});
            }).then(function()
            {
                return page.keyboard.press('A',{delay:200});
            }).then(function()
            {
                return page.keyboard.press('X',{delay:200});
            }).then(function () {
                return page.click(".monaco-editor.no-user-select.vs");
            })
            .then(function()
            {
                return page.keyboard.down('Control',{delay :10});
            })
            .then(function()
            {
                return page.keyboard.press('A',{delay:200});
            }).then(function()
            {
                return page.keyboard.press('V',{delay:100});
            }).then(function()
            {
                return page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
            })
            .catch(function (err) {
                console.log(err)
            })
    })
}