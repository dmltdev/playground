// for.each() method is not available for arrays in JavaScript
// but it is available for objects
// for.each() is a method that takes a callback function as an argument
// and calls the callback function for each element in the array
// the callback function takes three arguments: the element, the index, and the array itself

// This is a simple implementation of for.each() method for arrays
Array.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Example 1
var colors = ['red', 'blue', 'green'];

colors.forEach(function(color) {
    console.log(color);
});

// Example 2
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

function adder(number) {
    sum += number;
}

numbers.forEach(adder);
console.log(sum);

// Example 3
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) {
    console.log(' - ' + groceryItem);
});

// Another way to pass a callback for .forEach() is to use arrow function syntax.
groceries.forEach(groceryItem => console.log(groceryItem));

// We can also define a function beforehand to be used as the callback function.
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);

// Example 4
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));