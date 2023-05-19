import { test, expect } from '@playwright/test'

test.describe('section titles', () => {
  test('Title of main section', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    const locator = page.locator('.title')
    await expect(locator).toHaveText(/Products/i)
  })

  test('SubTitle of main section', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    const locator = page.locator('.subtitle')
    await expect(locator).toHaveText(/Affordable quality, every time./i)
  })
})
