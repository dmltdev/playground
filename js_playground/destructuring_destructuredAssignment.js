// Extract key-value pairs from an object and assign them to variables

const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

// Extract the residence key from the vampire object
// and assign it to a variable called residence
const { residence } = vampire;
console.log(residence); // Transylvania

// Extract the day key from the vampire object's preferences
// and assign it to a variable called day
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'