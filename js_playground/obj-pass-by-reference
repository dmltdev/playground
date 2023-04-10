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