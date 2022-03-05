const {loginPO, basicInfoPO} = require('../pages/index');
const {browser} = require("protractor");
const {userData} = require('../data/index');

describe('Happy Path', () => {
    beforeAll(async () => {
        await loginPO.gotoIntelyCare();
        await loginPO.inputEmailTxt(userData.testUser.email);
        await loginPO.inputPasswordTxt(userData.testUser.password);
        await loginPO.clickCreateAccountBtn();
    });

    it('should have the button grayed out if not all info has been entered', async ()=> {
        expect(await basicInfoPO.getAttributeContinueBtn()).toContain('disable');
        expect(await basicInfoPO.getAttributeConfirmPhone()).toContain('inactivebar');
        expect(await basicInfoPO.getAttributeScheduleInterview()).toContain('inactivebar');
    });

    it('should be able to fill in the form successfully and redirect to the career page', async () => {
        expect(await basicInfoPO.getAttributeContinueBtn()).toContain('disable');
        expect(await basicInfoPO.getAttributeConfirmPhone()).toContain('inactivebar');
        expect(await basicInfoPO.getAttributeScheduleInterview()).toContain('inactivebar');

        await basicInfoPO.inputFirstNameTxt(userData.testUser.firstName);
        await basicInfoPO.inputSecondNameTxt(userData.testUser.lastName);
        await basicInfoPO.inputMobileTxt(userData.testUser.mobile);
        await basicInfoPO.inputZipTxt(userData.testUser.zip);
        await basicInfoPO.clickRNRadioBtn();
        await basicInfoPO.clickDayShiftsCheckBox();
        await basicInfoPO.clickEveningShiftsCheckBox();
        await basicInfoPO.click4to8Months();
        await basicInfoPO.clickTermsAndConditionsCheckBox();
        await basicInfoPO.clickContinueBtn();

        expect(await basicInfoPO.getAttributeConfirmPhone()).toContain('activebar');
    });
});
