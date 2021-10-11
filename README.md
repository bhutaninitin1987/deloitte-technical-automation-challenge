# Deloitte Technical Automation Challenge
Repo for Deloitte Technical Automation Challenge

## The Problem - React Shopping Website
https://react-shooping-cart.netlify.app

### The Problem - React Website Testing

#### Scenario 1:

```markdown
Open the Store page
Add an item to the cart
Go to Cart
Check that item exist in Cart
Check value of Total Items, Total Payment
Check that Delete button appears for the added item
Click Clear button
Check that cart is clear
```

#### Scenario 2:

```markdown
Go to Store page
Add 2 items to the cart
Go to Cart
For the first item, increase quantity to 3
Check value of Total Items, Total Payment
Check that Reduce button displays for the first item
Check that Delete button displays for the second item
For the first item, decrease quantity to 2
Check value of Total Items, Total Payment
Delete the second item
Check that the first item is removed from cart -- ***This step is incorrect***
Click Checkout button
Check that message “Checkout successfully” displays
Check that cart is clear
```

## Solution
### Cucumber - TestCafe - Javascript - BDD

I have automated the above test scenarios using TestCafe test automation tool.

The framework is developed in BDD approach. There is only 1 feature file which covers both the above scenarios and two step definitions files to support the steps defined within the scenarios based on the page actions.

Feature File - shopping.feature
Step Definition Files - 
         - store_page_steps.js
         - cart_page_steps.js

There is a support folder which contains the below files to support the processing of framework.
         - pageObjects -> storePage.js and cartPage.js
         - cucumberWorld.js
         - hooks.js
         - testControllerHolder.js

In addition to above, there is an additional folder named as "reports" folder which contains the last execution report for your reference. This is the standard reporting functionality of Cucumber framework. 

## How to Setup 

### Pre-requisities
- NPM 6.x or more should be installed on your machine.

Please follow the below steps to setup this framework in your local.

- Clone this repository in your local 
- Open the repository in any IDE
- Open the integrated terminal of the IDE
- Navigate to the deloitte-technical-automation-challenge folder
- Run npm install

## How to run this in your local

Please follow the below step to run this in your local.
- Open the integrated terminal
- Navigate to the deloitte-technical-automation-challenge folder
- Run ./run_tests.sh

## Improvements

- Integration with Browser Stack - The framework is currently not integrated with browser stack, but I have verified this for Chrome, Firefox and Edge browsers on my local machine and it is working fine. As of now, I updated the browser type in hooks.js to test this, but definitely this can be integrated with browser stack for execution.
- Generic - The framework could be more generic and modular. As of now, the cucumber steps are bit repeated and static, and not modularised properly due to time limitation.
