const storePage = require('../support/pageObjects/storePage.js');
const { Given, When } = require('@cucumber/cucumber');


const url = 'https://react-shooping-cart.netlify.app';

Given('an user navigates to the store page', async () => {
    await testController.navigateTo(url);
    console.log('an user is navigated to the store page');
});

When('an user adds 1st item to the cart', async () => {
    const addFirstItemToCart = storePage.elements.firstItem();
    await testController.click(addFirstItemToCart);
    console.log('an item is added into the cart');
});

When('an user clicks on the cart link', async () => {
    const cartLink = storePage.elements.cartLink();
    await testController.click(cartLink);
    console.log('an user is navigated on the cart page');
});

When('an user adds 2nd item to the cart', async () => {
    const addSecondItemToCart = storePage.elements.secondItem();
    await testController.click(addSecondItemToCart);
    console.log('a second item is added into the cart');
});