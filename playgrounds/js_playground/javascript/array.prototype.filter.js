// array.filter() returns a new array containing all elements of the calling array for which the provided filtering function returns true.

// Example 1: Filter all even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Filter all odd numbers from an array

const oddNumbers = numbers.filter((number) => {
  return number % 2 === 1;
});

console.log(oddNumbers);

// Example 3: Filter all numbers greater than 5 from an array

const greaterThanFive = numbers.filter((number) => {
  return number > 5;
});

console.log(greaterThanFive); // Output: [6, 7, 8, 9, 10]

// Example 4: Filter all numbers less than 5 from an array

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});

console.log(smallNumbers); // Output: [200, 3.14, 7, 13]

// Example 5: Filter all string that are longer than 7 characters from an array

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

console.log(longFavoriteWords); // Output: ['nostalgia', 'hyperbole', 'esoteric']

// Example 6: Compare two arrays with .filter() and .includes() and return a new array with the elements that are the same in both arrays

const justCoolStuff = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

console.log(
  justCoolStuff(
    ["cool", "awesome", "rad", "chen"],
    ["rad", "vodka", "awesome", "cool"],
  ),
); // Output: ['cool', 'awesome', 'rad']
