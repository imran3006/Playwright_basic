const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pageobjects/LoginModule/loginPage')
const loginData = require('../testdata/logindata.json')
const { STORAGE_STATE } = require('../../playwright.config')
const testConfig = require('../../testconfig')

test('Browse websiteusing stored session', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage("https://www.saucedemo.com/")
  await expect(loginPage.titleTextVerify()).toHaveText('Swag Labs');
});
