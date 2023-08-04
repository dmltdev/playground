// array.map() is a method that takes a function as an argument
// and returns a new array with the results of calling the function on each element in the original array.

// Example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Example
const words = ["asap", "byob", "rsvp", "diy"];
const acronym = words.map((word) => word.toUpperCase().split("").join("."));
console.log(acronym); // ['A.S.A.P', 'B.Y.O.B', 'R.S.V.P', 'D.I.Y']

// Example
const prices = [6.75, 3.1, 4.0, 8.12];
const tax = 0.07;
const taxAdjustedPrices = prices.map((price) => price * (1 + tax));
console.log(taxAdjustedPrices); // [7.2025, 3.347, 4.28, 8.7244]
