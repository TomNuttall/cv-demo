import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://tomnuttall.dev/projects/cv-template')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CV/)
})

test('application id', async ({ page }) => {
  await page.goto('https://tomnuttall.dev/projects/cv-template')

  // Enter an application id and press enter
  const input = page.getByRole('textbox', { name: 'Application' })
  await input.fill('test')
  await input.press('Enter')

  // Expects page to have a heading with the name of TEST USER.
  await expect(page.getByRole('heading', { name: 'TEST USER' })).toBeVisible()
})
