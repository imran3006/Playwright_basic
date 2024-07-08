export class ProductPage {
  productLinkSelector = '#item_4_title_link'
  addToCartBtnSelector = '#add-to-cart'

  constructor(page) {
    this.page = page
  }

  async addProduct() {
    await this.page.locator(this.productLinkSelector).click()
    await this.page.locator(this.addToCartBtnSelector).click()
  }
}
