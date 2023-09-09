// array.reduce() method is used to reduce the array to a single value
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Syntax
// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

// Example 1

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4

console.log(array1.reduce(reducer));

// Example 2

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(summedNums); // Output: 17

// Example 3

const numbers2 = [1, 2, 4, 10];

const summedNums2 = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // <- Second argument for .reduce()

console.log(summedNums2); // Output: 117

// Example 4

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// Example 5

const nums = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initializer);

console.log(addItUp);
