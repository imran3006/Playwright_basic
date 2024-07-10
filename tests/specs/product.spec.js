import {test, expect} from "@playwright/test"
import { LoginPage } from "../pageobjects/LoginModule/loginPage"
import testConfig from "../../testconfig"
import loginData from "../testdata/logindata.json"
import { ProductPage } from '../pageobjects/productModule/productPage'


let loginPage;
let productPage;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  loginPage = new LoginPage(page);
  productPage = new ProductPage(page);
});

// test('Login with valid credentials and verify title', async () => {
//   await loginPage.gotoLoginPage("https://www.saucedemo.com/");
//   await expect(loginPage.titleTextVerify()).toHaveText('Swag Labs');
// });

test('Add a product', async () => {
  
  await productPage.addProduct();
  // Add assertions to verify product addition if needed
});
