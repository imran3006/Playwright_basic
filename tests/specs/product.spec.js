const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../pageobjects/productModule/productPage');
const { LoginPage } = require('../pageobjects/LoginModule/loginPage');
const testConfig = require('../../testconfig');

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
