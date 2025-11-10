// tests-e2e/todo.spec.js
import { test, expect } from '@playwright/test';

test('page loads and shows app title', async ({ page }) => {
  await page.goto('/');

  const title = page.getByRole('heading', { level: 1 });
  await expect(title).toBeVisible();
});

test('user can add a todo and see it in the list', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('What needs to be done?');
  const addButton = page.getByRole('button', { name: 'Add' });

  await input.fill('Write E2E test');
  await addButton.click();

  const todoText = page.locator('.todo-text').first();
  await expect(todoText).toHaveText('Write E2E test');
});

test('user can toggle a todo as completed', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Toggle me');
  await page.getByRole('button', { name: 'Add' }).click();

  const checkbox = page.locator('input[type="checkbox"]').first();
  await checkbox.check();

  const todoText = page.locator('.todo-text').first();
  await expect(todoText).toHaveClass(/completed/);
});

test('user can delete a todo', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Delete me');
  await page.getByRole('button', { name: 'Add' }).click();

  page.once('dialog', async (dialog) => {
    await dialog.accept();
  });

  const deleteButton = page.getByRole('button', { name: 'Delete' }).first();
  await deleteButton.click();

  const todos = page.locator('.todo-text');
  await expect(todos).toHaveCount(0);
});
