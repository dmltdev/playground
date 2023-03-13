

let exem = `half of 100 is ${100 / 2}`;
function halfValue(par1) {
    par1 = Math.round(par1 * 100) / 100;
    let par2 = par1 / 2;
    console.log(`Half of ${par1} is ${par2}`);
}

halfValue(Math.E);
halfValue(Math.LN10);

let par1 = "5" + 1;
console.log(par1);
console.log(typeof par1);