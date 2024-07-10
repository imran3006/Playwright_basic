import {test, expect} from "@playwright/test"
import { LoginPage } from "../pageobjects/LoginModule/loginPage"
import testConfig from "../../testconfig"
import loginData from "../../tests/testdata/logindata.json"
const { STORAGE_STATE } = require('../../playwright.config')


test('Browse websiteusing stored session', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage("https://www.saucedemo.com/")
  await expect(loginPage.titleTextVerify()).toHaveText('Swag Labs');
});
