Feature: Shopping Website - Add Item to Cart

@regression
Scenario: Add an item to cart and clear the cart
    Given an user navigates to the store page
    When an user adds 1st item to the cart
     And an user clicks on the cart link
     And an user verifies that the 1st item exists in cart
     And an user checks the value of 1st item as $39.11
     And an user checks the value of total payment as $39.11
     And an user checks that a delete button appears for the 1st item
     And an user click on clear button
    Then a cart empty message is displayed 

@regression
Scenario: Add multiple items to cart and checkout the cart
     Given an user navigates to the store page
     When an user adds 1st item to the cart
      And an user adds 2nd item to the cart
      And an user clicks on the cart link
      And an user increase the quantity of 1st item to 3
      And an user checks the value of 1st item as $39.11
      And an user checks the value of 2nd item as $51.01
      And an user checks the value of total payment as $168.34
      And an user verifies that the reduce button displays for 1st item
      And an user verifies that the delete button displays for 2nd item
      And an user decreases the quantity of 1st item to 2
      And an user checks the value of total payment as $129.23
      And an user deletes the 2nd item from the cart
      And an user clicks on checkout button
     Then a successful checkout message is displayed
      And a cart empty message is displayed