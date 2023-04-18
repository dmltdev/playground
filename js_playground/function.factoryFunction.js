/* 
A factory function is a function that returns an object 
and can be reused to make multiple object instances. 
Factory functions can also have parameters allowing us 
to customize the object that gets returned. 
*/

// Sample factory function
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
        name: name,
        age: age, 
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        }, 
        get getInfo() {
            return `I am ${this.name} and I am ${this.age} years old. My energy source is ${this.energySource}. My catchphrase is ${catchPhrase}.`;
        }
    }
};

// Create a monster using the factory function
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
console.log(ghost); // { name: 'Ghouly', age: 251, energySource: 'ectoplasm', scare: [Function: scare], getInfo: [Getter] }
console.log(ghost.getInfo); // I am Ghouly and I am 251 years old. My energy source is ectoplasm. My catchphrase is BOO!.
