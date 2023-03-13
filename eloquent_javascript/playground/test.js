function exampleCount () { // count a sum of numbers 1-10
    let total = 0, count = 1;
    while (count <= 10) {
        total += count;
        count += 1;
        console.log(total); // → 55
    }
}

function listCount(num) { // takes in a number and logs a sum of all numbers between 0 and that number (sum of 1-x)
    let total = 0; count = 1;
    while (count <= num) {
        total += count;
        count += 1;
    }
    console.log(total);

}
console.log(2e2);
console.log(2e8);
console.log(2**8);
console.log(Math.pow(2,8));