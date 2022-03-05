// To improve the reliability of the test cases we make additional checks on the DOM before taking action

const {protractor} = require("protractor");
const $EC = protractor.ExpectedConditions;

const timer = {
    waitTime200ms: 200,
    waitTime500ms: 500,
    waitTime1sec: 1000,
    defaultWaitTime: 5000,
    waitTime10sec: 10000,
    waitTime15sec: 15000,
    waitTime20sec: 20000,
    waitTime30sec: 30000,
    waitTime40sec: 40000,
};

export async function setInputValue(element, valueText, timeout = timer.waitTime10sec) {
    await browser.wait($EC.and($EC.presenceOf(element), $EC.visibilityOf(element)), timeout, 'setInputValue');
    return element.clear().sendKeys(valueText);
}

export async function waitAndClick(element, timeout = timer.waitTime20sec) {
    await browser.wait($EC.and($EC.presenceOf(element), $EC.visibilityOf(element)), timeout, 'waitAndClick');
    await browser.wait($EC.and($EC.presenceOf(element), $EC.elementToBeClickable(element)), timeout, 'waitAndClick');
    return element.click();
}

export async function getClassAttribute(element) {
    return element.getAttribute('class');
}

export async function getText (element, timeout=timer.waitTime40sec){
    await browser.wait($EC.and($EC.presenceOf(element), $EC.visibilityOf(element)), timeout, getText);
    return element.getText();
}
