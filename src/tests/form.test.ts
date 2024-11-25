// src/tests/form.test.ts
import { test, expect } from '@playwright/test';

test('should display form and submit data correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const nameInput = await page.locator('input[name="name"]');
  await nameInput.fill('John Doe');

  const emailInput = await page.locator('input[name="email"]');
  await emailInput.fill('john@example.com');

  const submitButton = await page.locator('button[type="submit"]');
  await submitButton.click();

  await expect(page.locator('text=Success')).toBeVisible();
});

test('should show validation error for empty required fields', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const submitButton = await page.locator('button[type="submit"]');
  await submitButton.click();

  const errorMessage = await page.locator('text=This field is required.');
  await expect(errorMessage).toBeVisible();
});
