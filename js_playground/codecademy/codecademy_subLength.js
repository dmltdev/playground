// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

const subLength = (str, char) => {
  let charCount = 0; // why 0? because if the first char is the one we're looking for, we want to return 1, not 0.
  let len = -1; // why -1? because if the first char is the one we're looking for, we want to return 1, not 0.

  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      charCount++; // why ++? because we want to count the number of occurrences of the char.
      if (charCount > 2) {
        return 0; // why 0? because if there are more than 2 occurrences of the char, we want to return 0.
      }
      if (len == -1) {
        len = i; // why i? because we want to return the length of the string, not the index of the last char.
      } else {
        len = i - len + 1; // why +1? because we want to return the length of the string, not the index of the last char.
      }
    }
  }
  if (charCount < 2) {
    return 0; // why 0? because if there are less than 2 occurrences of the char, we want to return 0.
  }

  return len;
};

console.log(subLength("Saturday", "a")); // 6
console.log(subLength("summer", "m")); // 2
console.log(subLength("digitize", "i")); // 0
console.log(subLength("cheesecake", "k")); // 0
