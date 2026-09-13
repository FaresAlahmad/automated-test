import {Page} from "@playwright/test";

export async function login(page: Page) {

    await page.goto('https://www.saucedemo.com/');

    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const loginbutton = page.locator('#login-button');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginbutton.click();
  
    
}