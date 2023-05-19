
import { test, expect } from '@playwright/test'

test.describe('Footer', () => {
  test('Footer text', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    const locator = page.locator('footer')
    await expect(locator).toHaveText(['© Gem paint co'])
  })
})
