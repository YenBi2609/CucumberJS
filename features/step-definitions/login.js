const { When, Then, Given } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { By ,until} = require('selenium-webdriver');


Given('A user visits login page', async function () {
     await this.driver.get('https://inter.apps.symper.vn/#/login');
});
When('the user enters {string} into the "email input" field', async function (accout) {
     await this.driver.findElement(By.css('input[name="login"]')).sendKeys(accout);
});
Then('the user should see "Email không hợp lệ"', async function () {
     var userAccount = await this.driver
     .findElement(By.css('.v-form .v-input.v-input--has-state.theme--light.v-text-field.v-text-field--is-booted.error--text:nth-child(1) .v-messages__message'))
     .getText();
     expect(userAccount).equal('Email không hợp lệ');
});
// Given('A user visits login ', async function () {
//      await this.driver.get('https://inter.apps.symper.vn/#/login');
// });
// When('the user enters {string} into the "email input" field', async function (accout) {
//      await this.driver.findElement(By.css('input[name="login"]')).sendKeys(accout);
// });
When('the user enters "password" into the "password input" field', async function () {
     await this.driver.findElement(By.id("password")).sendKeys('         ');

});
When('the user clicks on "Đăng nhập"', async function () {
     await this.driver
     .findElement(
         By.className(
             "symper-bg-orange w-100 v-btn v-btn--flat v-btn--text theme--dark v-size--default"
         )
     )
     .click(); 
});
Then('the user should see "Không thể đăng nhập" error message title', async function () {
     await this.driver.wait(
          until.elementLocated(
              By.className(
                  "subtitle-1 font-weight-medium"
              )
          ), 30000
      );
     var titleAlert = await this.driver.findElement(By.className("subtitle-1 font-weight-medium")).getText();
     expect(titleAlert).equal('Không thể đăng nhập');
});
Then('the user should see "Tài khoản hoặc mật khẩu không chính xác!" error message content', async function () {
     await this.driver.wait(
          until.elementLocated(
              By.css(
                  'div[style="word-break: break-word !important;"]'
              )
          ), 30000
      );
     var contentAlert = await this.driver.findElement(By.css('div[style="word-break: break-word !important;"]')).getText();
     expect(contentAlert).equal('Tài khoản hoặc mật khẩu không chính xác!');
});



