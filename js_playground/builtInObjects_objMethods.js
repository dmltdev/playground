// Built-in Object Methods

// Sample object
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

// Object.keys() returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const robotKeys = Object.keys(robot);
console.log(robotKeys); // [ 'model', 'energyLevel', 'functionality' ]


// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
const robotEntries = Object.entries(robot);
console.log(robotEntries); // [ [ 'model', '1E78V2' ], [ 'energyLevel', 100 ], [ 'functionality', { beep: [Function: beep], fireLaser: [Function: fireLaser] } ] ]


// Object.assign() copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const robotAssign = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(robotAssign); // { laserBlaster: true, voiceRecognition: true, model: '1E78V2', energyLevel: 100, functionality: { beep: [Function: beep], fireLaser: [Function: fireLaser] } }

// Object.hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
const robotProperty = robot.hasOwnProperty('model');
console.log(robotProperty); // true

// Object.valueOf() returns the primitive value of the specified object.
const robotValue = robot.valueOf();
console.log(robotValue); // { model: '1E78V2', energyLevel: 100, functionality: { beep: [Function: beep], fireLaser: [Function: fireLaser] } }

// Object.map() is a method that takes a function as an argument 
// and returns a new object with the results of calling the function on each element in the original object.
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];

const saleProducts = products.map(product => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 }
    } else {
        return product;
    }
});

console.log(saleProducts, products);