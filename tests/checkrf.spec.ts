import { test, expect } from '@playwright/test';
import { login } from './helpers/login';

test('checkout required fields test', async ({ page }) => {

    await login(page);

    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.locator('.shopping_cart_link').click();
    await page.getByRole('button', { name: 'Checkout' }).click();


    await page.getByPlaceholder('Last Name').fill('Alahmad');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Error: First Name is required')).toBeVisible();

    await page.getByPlaceholder('First Name').fill('Fares');
    await page.getByPlaceholder('Last Name').clear();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Error: Last Name is required')).toBeVisible();

   
    await page.getByPlaceholder('Last Name').fill('Alahmad');
    await page.getByPlaceholder('Zip/Postal Code').clear();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Error: Postal Code is required')).toBeVisible();

});