// In JavaScript, objects are mutable. They can be freely modified. In other words, object parameters are passed by reference.
// However, JavaScript is pass-by-value. This means that when a primitive value is passed to a function, the value is passed to the function, but if a non-primitive value (i.e. an object) is passed to a function, the reference to that object is passed to the function. This means that if the function changes the object's properties, that change is visible outside the function, as shown below:

let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
};
let tryReassignment = obj => {
    obj = {
        identified : false, 
        'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
    
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
    identified : false, 
    'transport type': 'flying'
}; // Regular reassignment still works.

// Write your code below
let greenEnergy = (obj) => {
    obj["Fuel Type"] = "avocado oil";
};

const remotelyDisable = obj => obj.disabled = true;

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);