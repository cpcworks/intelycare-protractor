export async function getErrorMsg() {
    return basePO.getText($('#zipSearch > p'))
}

const basePO = require('./basePO');

export async function inputFirstNameTxt(value) {
    return basePO.setInputValue($('[automation-id="first-name-answer"]'), value);
}

export async function inputSecondNameTxt(value) {
    return basePO.setInputValue($('[automation-id="last-name-answer"]'), value);
}

export async function inputMobileTxt(value) {
    return basePO.setInputValue($('[automation-id="mobile-answer"]'), value);
}

export async function inputZipTxt(value) {
    return basePO.setInputValue($('[automation-id="zip-code-answer"]'), value);
}

export async function clickRNRadioBtn() {
    return basePO.waitAndClick($('[id="radio_8"]'));
}

export async function clickDayShiftsCheckBox() {
    return basePO.waitAndClick($('[ng-model="user.profile.shiftType.day"]'));
}

export async function clickEveningShiftsCheckBox() {
    return basePO.waitAndClick($('[ng-model="user.profile.shiftType.evening"]'));
}

export async function click4to8Months() {
    return basePO.waitAndClick($('[id="radio_10"]'));
}

export async function clickTermsAndConditionsCheckBox() {
    return basePO.waitAndClick($('[automation-id="termsAccept-answer"]'));
}

export async function getAttributeContinueBtn() {
    return basePO.getClassAttribute($('[id="AP_Basic_Info_continue"]'));
}

export async function getAttributeConfirmPhone() {
    return basePO.getClassAttribute($('.progress_bar > :nth-child(2)'));
}

export async function getAttributeScheduleInterview() {
    return basePO.getClassAttribute($('.progress_bar > .ng-scope'));
}

export async function clickContinueBtn() {
    return basePO.waitAndClick($('[id="AP_Basic_Info_continue"]'));
}

export async function get() {
    return basePO.getText($('[automation-id="AP_Basic_Info_continue"]'));
}
