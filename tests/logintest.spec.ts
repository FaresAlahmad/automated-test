import { expect, test } from "@playwright/test";
import { login } from "./helpers/login";

test('Login Test', async ({ page }) => {

    await login(page);

    await expect(page.getByText('Swag Labs')).toBeVisible();

});