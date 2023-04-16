// array.findIndex() returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

// Example 1: findIndex() on an array of numbers

const array1 = [5, 12, 8, 130, 44];

const found = array1.findIndex(element => element > 12);

console.log(found); // 3

// Example 2: findIndex() on an array of objects

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.findIndex(isCherries)); // 2

// Example 3: Find an index of the element that has the value 'elephant' in an array

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex((animal) => {
  return animal === 'elephant';
})

// Example 4: Find an index of the element that starts with 's' in an array

const startsWithS = animals.findIndex((animal) => {
    return animal.startsWith('s');
  })