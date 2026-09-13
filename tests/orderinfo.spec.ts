import { test, expect } from '@playwright/test';
import { login } from './helpers/login';

test('checkout order information test', async ({ page }) => {

await login(page);
await page.getByRole('button', { name: 'Add to cart' }).first().click();
await page.locator('.shopping_cart_link').click();
await page.getByRole('button', { name: 'Checkout' }).click();
await page.getByPlaceholder('First Name').fill('Fares');
await page.getByPlaceholder('Last Name').fill('Alahmad');
await page.getByPlaceholder('Zip/Postal Code').fill('12345');
await page.getByRole('button', { name: 'Continue' }).click();


await expect(page.getByText('Checkout: Overview')).toBeVisible();
await expect(page.getByText('Payment information')).toBeVisible();
await expect(page.getByText('Shipping information')).toBeVisible();
await expect(page.getByText('Price Total')).toBeVisible();

await page.getByRole('button', { name: 'Finish' }).click();
await expect(page.getByText('Thank you for your order!')).toBeVisible();

});
