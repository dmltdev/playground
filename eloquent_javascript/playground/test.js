console.log(2e2);
console.log(2e8);
console.log(5 * Math.PI);
console.log(2**8);
console.log(Math.pow(2,8));

let exem = `half of 100 is ${100 / 2}`;
function halfValue(par1) {
    par1 = Math.round(par1 * 100) / 100;
    let par2 = par1 / 2;
    console.log(`Half of ${par1} is ${par2}`);
}

halfValue(Math.PI);