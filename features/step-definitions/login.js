const { When, Then, Given } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { By } = require('selenium-webdriver');


Given('I visit homepage', async function () {
     await this.driver.get('https://www.google.com');
});
When('I search for', async function () {
     await this.driver.findElement(By.name('q')).sendKeys('dcdcd' + '\n');
});
Then('I should see', async function () {
     let text = await this.driver.findElement(By.id('search')).getText();

});
Given('A user visits mail.google.com', function () {
     this.driver.get('https://mail.google.com');
});

Given('I visit google', async function () {
     await driver.get('https://www.google.com');
});
Then('I should see Google in title', async function () {
     let title = await driver.getTitle();
     console.log(title);
});


