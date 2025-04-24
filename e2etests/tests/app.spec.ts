import { clerk, setupClerkTestingToken } from '@clerk/testing/playwright'
import { test, expect } from '@playwright/test'

test('CV page has title', async ({ page }) => {
  // Act
  await page.goto('https://tomnuttall.dev/projects/cv-template/cv')

  // Assert
  await expect(page).toHaveTitle(/CV/)
  await expect(page.getByRole('heading', { name: 'JOHN DOE' })).toBeVisible()
})

test('Covering Letter page has title', async ({ page }) => {
  // Act
  await page.goto('https://tomnuttall.dev/projects/cv-template/covering-letter')

  // Assert
  await expect(page).toHaveTitle(/Covering Letter/)
  await expect(page.getByRole('paragraph')).toHaveCount(3)
})

test('application id from query path', async ({ page }) => {
  // Act
  await page.goto(
    'https://tomnuttall.dev/projects/cv-template/cv?application=test',
  )

  // Assert
  await expect(page.getByRole('heading', { name: 'TEST USER' })).toBeVisible()
})

test('clerk sign in', async ({ page }) => {
  // Arrange
  await setupClerkTestingToken({ page })
  await page.goto('https://tomnuttall.dev/projects/cv-template')

  // Sign in
  await clerk.signIn({
    page,
    signInParams: {
      strategy: 'password',
      identifier: 'playwright+clerk_test@example.com',
      password: process.env.CLERK_TEST_USER,
    },
  })

  // Act
  const input = page.getByRole('textbox', { name: 'Application' })
  await expect(input).toBeVisible()

  await input.fill('test')
  await input.press('Enter')

  // Assert
  await expect(page.getByRole('heading', { name: 'TEST USER' })).toBeVisible()
})
