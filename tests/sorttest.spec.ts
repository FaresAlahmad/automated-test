import { expect,test ,Locator } from "@playwright/test";
import { login } from "./helpers/login";
test('sorting test',async({page})=>{

await login(page);

await page.getByLabel('Sort products').click();
await page.getByLabel('Sort products').selectOption('lohi');

//Locate inventory item prices and get me the text inside it
const prices = await page.locator('.inventory_item_price').allTextContents();
//parsefloat to convert string to number and remove $ sign,replace function to remove $ sign with nothing '',map arraysChanging
const numbers = prices.map(price => parseFloat(price.replace('$', '')));




for (let i = 0; i < numbers.length - 1; i++) {

     //A number is less the number i +1---- 5(0) is less than 10(1)
    expect(numbers[i]).toBeLessThanOrEqual(numbers[i + 1]);

}


})