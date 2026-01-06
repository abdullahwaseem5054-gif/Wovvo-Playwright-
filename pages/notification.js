class Notifications {
  constructor(page) {
    this.page = page;
    this.toggleLabel = page.locator('xpath=/html/body/div[2]/div[2]/main/div/div/div[2]/div[2]/div/div/div[2]/div[1]/div/label/div');
    this.toggleInput = this.toggleLabel.locator('xpath=ancestor::label//input[@type="checkbox" and contains(@class,"peer")]');
    this.dropdown = page.locator('xpath=/html/body/div[2]/div[2]/main/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div[1]/div/button');
    this.applyBtn = page.locator('button[data-slot="button"]', { hasText: 'Apply Settings' });
  }
  async openPage() {
    await this.page.goto('/notifications');
  }
  async isToggleOn() {
    return await this.toggleInput.evaluate(el => el.checked);
  }
  async clickToggleAndWait() {
    await this.toggleLabel.click();
  }
  async turnOnToggle() {
    if (!(await this.isToggleOn())) {
      await this.clickToggleAndWait(true);
    }
  }

  async turnOffToggle() {
    if (await this.isToggleOn()) {
      await this.clickToggleAndWait(false);
    }
  }

  async selectFrequency(frequency) {
    const isExpanded = await this.dropdown.getAttribute('aria-expanded');
    if (isExpanded !== 'true') {
      await this.dropdown.click();
    }
    await this.page.getByRole('option', { name: frequency }).click();
  }

  async applySettings() {
    await this.applyBtn.click();
  }

  async notification() {
    const isToggleOn = await this.isToggleOn();

    if (!isToggleOn) {
      await this.turnOnToggle();
      await this.selectFrequency('Daily');
      await this.applySettings();
    } else {
      await this.turnOffToggle();
      await this.applySettings();

      await this.turnOnToggle();
      await this.selectFrequency('Weekly');
      await this.applySettings();
    }
  }
}

module.exports = Notifications;
