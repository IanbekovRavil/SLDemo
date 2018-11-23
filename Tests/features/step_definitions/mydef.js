//This file contains step definitions for the feature file. 

var {defineSupportCode} = require('cucumber');
var calcPage = require('../pages/calcPage');
var conf = require('../../conf').config;

defineSupportCode(function({Given, When, Then}) {

	Given(/^I am on calculator page$/, function () {
        return browser.get(conf.baseUrl);
    });

	When('I type {string} as a first argument', function (string) {
           browser.waitForAngular();
			browser.sleep(2000);
		   return element(by.model('first')).sendKeys(string);
    });
	
	When('I type {string} as a second argument', function (string) {
           browser.waitForAngular();
			browser.sleep(2000);
		   return element(by.model('second')).sendKeys(string);
    });
		 
			
    When(/^I click operation button$/, function () {
		return element(by.className('btn')).click();
    });

	Then('I should see {string} calculation result', function (string) {
    	browser.waitForAngular();
		browser.sleep(2000);
		return expect(element(by.binding('latest')).getText()).to.eventually.equal(string);
    });
});