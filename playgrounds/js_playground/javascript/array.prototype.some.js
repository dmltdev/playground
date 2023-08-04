// array.some() method is used to check if any of the elements in an array pass a test (provided as a function).

// Example 1

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

console.log(
  words.some((word) => {
    return word.length < 6;
  }),
);
