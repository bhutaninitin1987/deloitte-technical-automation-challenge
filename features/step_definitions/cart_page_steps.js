const cartPage = require('../support/pageObjects/cartPage.js');
const { When, Then} = require('@cucumber/cucumber');
const { Selector } = require('testcafe');

When('an user verifies that the 1st item exists in cart', async () => {
  const productDetail = await Selector('.mb-1').with({ boundTestRun: testController }).textContent;
  await testController.expect(productDetail).contains('Buffalo - Striploin');
  console.log('the 1st item ' + productDetail + 'is present in the cart');
});

When('an user checks the value of 1st item as $39.11', async () => {
  const firstItemPrice = await Selector('.mb-1').with({ boundTestRun: testController }).nth(1).textContent;
  await testController.expect(firstItemPrice).contains('$39.11');
  console.log('the item price of the first item is validated as ' + firstItemPrice);
});

When('an user checks the value of 2nd item as $51.01', async () => {
  const secondItemPrice = await Selector('.mb-1').with({ boundTestRun: testController }).nth(5).textContent;
  await testController.expect(secondItemPrice).contains('$51.01');
  console.log('the item price of the second item is validated as ' + secondItemPrice);
});

When('an user checks the value of total payment as $39.11', async () => {
  const totalPayment = await Selector('.m-0.txt-right').with({ boundTestRun: testController }).textContent;
  await testController.expect(totalPayment).contains('$39.11');
  console.log('the total payment of a cart is validated as ' + totalPayment);
});

When('an user checks the value of total payment as $168.34', async () => {
  const totalPayment = await Selector('.m-0.txt-right').with({ boundTestRun: testController }).textContent;
  await testController.expect(totalPayment).contains('$168.34');
  console.log('the total payment of a cart is validated as ' + totalPayment);
});

When('an user checks the value of total payment as $129.23', async () => {
  const totalPayment = await Selector('.m-0.txt-right').with({ boundTestRun: testController }).textContent;
  await testController.expect(totalPayment).contains('$129.23');
  console.log('the total payment of a cart is validated as ' + totalPayment);
});

When('an user checks that a delete button appears for the 1st item', async () => {
  const firstDeleteButton = Selector('.btn.btn-danger.btn-sm.mb-1 svg path').with({ boundTestRun: testController });
  await testController.expect(firstDeleteButton.exists).ok();
  console.log('a delete button is present for the 1st item');
});

When('an user click on clear button', async () => {
  const clearCart = cartPage.elements.clearButton();
  await testController.click(clearCart);
  console.log('an user clears the cart by clicking the clear button')
});

Then('a cart empty message is displayed', async () => {
  const cartEmpty = await Selector('.p-3.text-center.text-muted').with({ boundTestRun: testController }).textContent;
  await testController.expect(cartEmpty).contains('Your cart is empty');
  console.log('"' + cartEmpty +'" message appears on the cart page');
});

When('an user increase the quantity of 1st item to 3', async () => {
    const increaseButton = cartPage.elements.increaseButton();
    await testController.click(increaseButton);
    await testController.click(increaseButton);
    console.log('the quantity of the 1st item is increased to 3');
});

When('an user verifies that the reduce button displays for 1st item', async () => {
  const firstItemDecreaseButton = Selector('.btn.btn-danger.btn-sm.mb-1 svg path').with({ boundTestRun: testController });
  await testController.expect(firstItemDecreaseButton.exists).ok();
  console.log('a decrease button is present for the 1st item');
});

When('an user verifies that the delete button displays for 2nd item', async () => {
  const secondItemDeleteButton = Selector('.btn.btn-danger.btn-sm.mb-1 svg path').nth(1).with({ boundTestRun: testController });
  await testController.expect(secondItemDeleteButton.exists).ok();
  console.log('a delete button is present for the 2nd item');
});

When('an user decreases the quantity of 1st item to 2', async () => {
  const decreaseButton = cartPage.elements.decreaseButton();
  await testController.click(decreaseButton);
  console.log('the quantity of 1st item is decreased to 2');
});

When('an user deletes the 2nd item from the cart', async () => {
  const deleteButton = cartPage.elements.secondItemDeleteButton();
  await testController.click(deleteButton);
  console.log('the 2nd item is deleted from the cart');
});

When('an user clicks on checkout button', async () => {
  const checkoutButton = cartPage.elements.checkoutButton();
  await testController.click(checkoutButton);
  console.log('a cart is checked out');
});

Then('a successful checkout message is displayed', async () => {
  const cartCheckoutMessage = await Selector('main p').withText('Checkout successfull').with({ boundTestRun: testController }).textContent;
  await testController.expect(cartCheckoutMessage).contains('Checkout successfull');
  console.log('"' + cartCheckoutMessage +'" message appears on the cart page');
});