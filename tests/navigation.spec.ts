import { test, expect } from '@playwright/test'

test.describe('Navigation mobile', () => {
  test.use({
    viewport: { width: 420, height: 1200 }
    // isMobile: true
  })
  test('Nav bar mobile', async ({ page }) => {
    await page.goto('http://localhost:5173/')

    await page.locator('id=nav-btn').click()
    await expect(page.locator('id=main-nav')).toBeVisible()

    await expect(page.locator('ul > li')).toHaveText(['Products', 'Discounts', '', 'Our partners', 'About us'])

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Pactica flex | F5P7M | Hector/)
  })

  test('Not showing logo menu in desktop', async ({ page }) => {
    await page.goto('http://localhost:5173/')
  })
})

test.describe('Navigation desktop', () => {
  test('Menu in desktop display all nav items', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    await expect(page.locator('ul > li')).toHaveText(['Products', 'Discounts', '', 'Our partners', 'About us'])
  })

  test('Hide mobile logo', async ({ page }) => {
    await expect(page.locator('.logo')).toBeHidden()
    await expect(page.locator('.logo')).toBeHidden()
  })
})
