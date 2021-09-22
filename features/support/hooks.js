const {Before, After} = require('@cucumber/cucumber');

Before(async function() {
  return await this.driver.manage().window().maximize();
});

After(function() {
  return this.driver.quit();
});