///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 //const summedPrice = cart.reduce(cart, cb) {
//      return 
//}

let summedPrice = function(cart) {
/* 
    let sumTotal = 0;
    for(i = 0; cart.length; i++) {
        sumTotal += cart[i].price;
    }
    return sumTotal;
*/
}

//console.log(`The total is ${summedPrice(cart)}`);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Customer object will cotain 5 properties
Customer name = string: The customer's name is a word
Entree name that the customer is purchasing = string: The entree's name is a word
The Entree Quantity that the customer is purchasing = number: The entree quantity is numerical
The Entree price of the dish = number: The entree price is numerical
A property called isVegan that check if a customer wants a vegan option or not = boolean
boolean: A customer is or is not vegan
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customer {
    constructor(cName, entreeName, entreeQuantity, entreePrice, isVegan) {
        this.cName = cName;
        this.entreeName = entreeName;
        this.entreeQuantity = entreeQuantity;
        this.entreePrice = entreePrice;
        this.isVegan = isVegan;
    }
}

let customerOne = ("Janice", "Prosciutto e Melone", 1, 13.99, false);