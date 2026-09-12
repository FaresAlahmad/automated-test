import { expect,test ,Locator } from "@playwright/test";
test('login test',async({page})=>{

await page.goto('https://www.saucedemo.com/');
const username: Locator = page.locator('#user-name');
const password: Locator = page.locator('#password');
const loginbutton: Locator = page.locator('#login-button');


await username.fill('standard_user');
await password.fill('secret_sauce');
await loginbutton.click();


await expect(page.getByText('Swag Labs')).toBeVisible();

})

