const {test,expect}=require('@playwright/test');



test('TC001',async({page})=>{
console.log("staring the tc")
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
console.log(await page.title())
await expect(page).toHaveTitle("OrangeHRM")
console.log("ending first TC001");

});

