// array.sort() is an in-place method that sorts the array in place
// it takes a compare function as an argument
// the compare function takes two arguments and returns a number
// if the number is negative, the first argument is sorted before the second
// if the number is positive, the second argument is sorted before the first
// if the number is 0, the order is unchanged
// the compare function is called for each pair of elements in the array

// Example 1: sort an array of numbers

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
    return a - b;
    });
console.log(numbers); // [1, 2, 3, 4, 5]

// Example 2

const sortYears = arr => arr.sort((a, b) => a < b);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))