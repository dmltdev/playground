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

// Object.filter() method creates a new array with all elements that pass the test implemented by the provided function.
const robotFilter = Object.filter(robot, (key, value) => {
    return key === 'model';
});
console.log(robotFilter); // { model: '1E78V2' }