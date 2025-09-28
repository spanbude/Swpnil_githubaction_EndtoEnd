const {test,expect}=require('@playwright/test');



test('TC001',async({page})=>{
console.log("staring the tc_001-from login page**************")
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
console.log(await page.title())
await expect(page).toHaveTitle("OrangeHRM")
console.log("ending first TC001**************************");

});


test('TC002',async({page})=>{
console.log("staring the tc002--from login page***********************")
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("//input[@placeholder='Username']").fill("Admin");
await page.locator("//input[@placeholder='Password']").fill("admin123")
await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(10000)
console.log(await page.title())
await expect(page).toHaveTitle("OrangeHRM")
console.log("ending first TC002*******************************");

});

