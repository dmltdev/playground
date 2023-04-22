// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

const groceries = (arr) => {
    let str = "";
    for (let i=0; i<arr.length; i++) {
        if (i == 0) { 
            str += arr[i].item; // First item in array should not be joined by a comma
        } else if (i == arr.length - 1) { // Last item in array should be joined by "and"
            str += " and " + arr[i].item; 
        } else { // All other items should be joined by a comma
            str += ", " + arr[i].item; 
        }
    }
    return str;
}