import { test, expect } from '@playwright/test';
import { login } from "./helpers/login";
test('add/remove and cart validation test',async({page})=>{
await login(page);

await page.getByRole('button',{name: 'Add to cart'}).nth(1).click();
await page.getByRole('button',{name: 'Add to cart'}).nth(2).click();
await page.getByRole('button',{name: 'Add to cart'}).nth(2).click();

await page.getByRole('button',{name: 'Remove'}).nth(1).click();
await expect(page.locator('.shopping_cart_badge')).toHaveText('2');



})