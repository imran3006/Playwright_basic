export class LoginPage {
  userNameInputSelector = '#user-name'
  userPassInputSelector = '#password'
  loginBtnSelector = '#login-button'
  appLogoTextSelector = '.app_logo'

  constructor(page) {
    this.page = page
  }

  async gotoLoginPage(url) {
    await this.page.goto(url)
  }

  async login(username, password) {
    await this.page.locator(this.userNameInputSelector).type(username)
    await this.page.locator(this.userPassInputSelector).type(password)
    await this.page.locator(this.loginBtnSelector).click()
  }

  titleTextVerify() {
    return this.page.locator(this.appLogoTextSelector)
  }
}
