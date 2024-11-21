const { test, expect, chromium } = require('@playwright/test');

// test new task, (async ({ }) => 
//   const browser = await chromium.launch({headless: false });
//    const page=await browser.newPage();
//    await page.goto(`www.amazon.com`);
//    await page.goto(`www.flipkart`);
//    await page.screenshot(path= easy.png);
// });
test  ("new task",async ({ }) => {
    const browser = await chromium.launch({headless: false });
    await page.goto('www.deodap.com');
    const page=await browser.newPage();
   await page.goto(`www.amazon.com`);
   await page.goto(`www.flipkart`);
   await page.screenshot({path: easy.png});
  });
    
