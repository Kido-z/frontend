import { test } from '@playwright/test';

test('Verified all elements on homepage works', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('navigation').getByRole('link', { name: 'Logo Kido\'z' }).click();
  await page.getByRole('heading', { name: 'Découvrez notre sélection' }).click();
  await page.getByRole('link', { name: 'De 2 à 5 ans' }).click();
  await page.getByRole('img', { name: 'jouet' }).nth(2).click();
  await page.getByRole('button', { name: 'Voir' }).nth(2).click();
});



