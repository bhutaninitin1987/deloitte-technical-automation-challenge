const { Selector } = require('testcafe'); 
const { testController } = require('../testControllerHolder');

exports.elements = {
    cartLink: function() {
        return Selector('a').withText('Cart').with({ boundTestRun: testController});
    },
    firstItem: function() {
        return Selector('main button').withText('ADD TO CART').with({ boundTestRun: testController});
    },
    secondItem: function() {
        return Selector('main button').withText('ADD TO CART').nth(1).with({ boundTestRun: testController});
    }
}