// array.reduce() method is used to reduce the array to a single value
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Syntax
// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

// Example 1

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4

console.log(array1.reduce(reducer));

