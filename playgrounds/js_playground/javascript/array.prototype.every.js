// array.every() returns true if every element in the array satisfies the provided testing function. Otherwise, it returns false.

// Example 1: Check if all numbers in an array are positive

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allPositive = numbers.every((number) => {
  return number > 0;
});

console.log(allPositive); // Output: true

// Example 2: Check if all keys in an array of objects are strings

const myObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const allKeysAreStrings = Object.keys(myObj).every((key) => {
  return typeof key === "string";
});

console.log(allKeysAreStrings); // Output: true

// Example 3

const isTheDinnerVegan = (arr) => {
  return arr.every((obj) => obj.source === "plant");
};

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner)); // Output: false
