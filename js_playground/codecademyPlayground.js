const justCoolStuff = (arr1, arr2) => {
    const resultArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                resultArr.push(arr1[i]);
            }
        }
    }
    return resultArr;
}

// q: Rewrite the above function using the .filter() method.

// Example of comparing two arrays using .filter()  with .includes()

const justCoolStuff = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
    

// Test Cases
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))