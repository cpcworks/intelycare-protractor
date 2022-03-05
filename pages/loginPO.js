const basePO = require('./basePO');

export async function inputPasswordTxt(value) {
    return basePO.setInputValue($('[id="input_1"]'), value);
}

export async function inputEmailTxt(value) {
    return basePO.setInputValue($('[id="input_0"]'), value);
}

export async function clickCreateAccountBtn() {
    return basePO.waitAndClick($('[id="AP_FirstPage_CreateAccount"]'));
}

export async function gotoIntelyCare() {
    return browser.get('https://portal.dev.qa.automation1.legacy.intelycare.com/apply/career.html');
}
