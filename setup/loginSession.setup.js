import {test, expect} from "@playwright/test"
import { LoginPage } from "../tests/pageobjects/LoginModule/loginPage"
import testConfig from "../testconfig"
import loginData from "../tests/testdata/logindata.json"
import {STORAGE_STATE} from "../playwright.config"




test('Login to the application and Store the login session for future testcases', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage(`${testConfig.functional}`);
  await loginPage.login(loginData.username, loginData.password);
  await page.context().storageState({ path: STORAGE_STATE });
});
