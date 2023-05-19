import { test, expect } from '@playwright/test'

test.describe('Cards components', () => {
  test('Cards titles', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    const locator = page.locator('.card-list article h3')
    await expect(locator).toHaveText([/MATTE/i, /SEMI-GLOSS/i, /HIGH-GLOSS/i])
  })

  test('Cards text content', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    const locator = page.locator('.card__text-content')
    await expect(locator).toHaveText(['a subtle but elegant finish for low-touch and delicate surfaces', 'our signature finish for high-wear parts, details and surfaces', 'an eye-stopping shine best for metal and other smooth surfaces'])
  })

  test('Cards links', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    const locator = page.locator('article a')
    await expect(locator).toHaveText(['Explore', 'Explore', 'Explore'])
  })

  test('Cards have a white border', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    const locator = page.locator('article') // use count()
    await expect(locator.first()).toHaveCSS('border', '3px solid rgb(255, 255, 255)')
    await expect(locator.first()).toHaveCSS('--p-1', '10px')
    await expect(locator.first()).toHaveCSS('--white', '#FFFFFF')
  })
})
