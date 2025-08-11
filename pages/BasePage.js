class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitAndDelay(selector, delay = 2000) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.waitForTimeout(delay);
  }
}

module.exports = BasePage;
