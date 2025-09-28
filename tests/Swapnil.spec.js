const{test,expect}=require('@playwright/test')

test('HomepageTC',async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator("//input[@id='name']").fill("Swapnil")
await page.locator("//input[@id='email']").fill("swapnil17@gmail.com");
await page.locator("//input[@id='phone']").fill("6747348")
await page.locator("//label[@for='female']").click();

});