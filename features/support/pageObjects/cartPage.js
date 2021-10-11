const { Selector } = require('testcafe'); 
const { testController } = require('../testControllerHolder');

exports.elements = {
    productDetails: function() {
        return Selector('.mb-1').with({ boundTestRun: testController });
    },
    emptyCartMessage: function() {
        return Selector('.p-3.text-center.text-muted').with({ boundTestRun: testController });
    },
    increaseButton: function() {
        return Selector('.btn.btn-primary.btn-sm.mr-2.mb-1 svg').with({ boundTestRun: testController });
    },
    decreaseButton:  function() {
        return Selector('.btn.btn-danger.btn-sm.mb-1 svg path').with({ boundTestRun: testController });
    },
    secondItemDeleteButton: function() {
        return Selector('.btn.btn-danger.btn-sm.mb-1').nth(1).find('svg').with({ boundTestRun: testController });
    },
    checkoutButton: function() {
        return Selector('main button').withText('CHECKOUT').with({ boundTestRun: testController });
    },
    clearButton: function() {
        return Selector('main button').withText('CLEAR').with({ boundTestRun: testController });
    }
}