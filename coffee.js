//  In this challenge, you'll be using the array reduce function to calculate the total bill from a trip to the coffee shop with your friends. Each person has ordered some number of coffees and you offer to pay the entire bill. Given an array of integers where each value is greater than zero, calculate the total price of all coffees. Each coffee costs $1.25. You should return your answer in the following format. The total bill is, followed by the total. You should use template literals for your return value.

const drinks = [3, 2, 1, 5, 3];

function total(total, num) {
    return num * 1.25 + total;
}
let cost = drinks.reduce(total, 0); // currentValue starts set to 0
console.log(`The total bill is ${cost}`)