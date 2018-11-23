var googleSearch = function () {
    "use strict";
    this.firstNumber = element(by.model('first'));
    this.secondNumber = element(by.model('second'));
	this.goButton = element(by.id('gobutton'));
	this.latestResult = element(by.binding('latest'));
};
module.exports = googleSearch;