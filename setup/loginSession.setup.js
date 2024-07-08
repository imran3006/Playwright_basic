const { test } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginModule/loginPage');
import testConfig from "../testconfig"

const loginData = require('../testdata/logindata.json');
import {STORAGE_STATE} from "../playwright.config"

const { expect } = require("@playwright/test")



test('Login to the application and Store the login session for future testcases', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage(`${testConfig.functional}`);
  await loginPage.login(loginData.username, loginData.password);
  await page.context().storageState({ path: STORAGE_STATE });
});
