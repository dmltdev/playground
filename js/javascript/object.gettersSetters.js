const dogFactory = (name, breed, weight) => {
  if (
    typeof weight === "number" &&
    typeof name === "string" &&
    typeof breed === "string"
  ) {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name;
      },
      get breed() {
        return this._breed;
      },
      get weight() {
        return this._weight;
      },
      set name(newName) {
        this._name = newName;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },
      set weight(newWeight) {
        this._weight = newWeight;
      },
      bark() {
        return "ruff! ruff!";
      },
      eatTooManyTreats() {
        this._weight++;
      },
    };
  } else {
    return "Wrong parameters! Weight should be a number, name and breed should be strings!";
  }
};

// test cases with getters and setters of a sample object
const kyle = dogFactory("Kyle", "Chih", 25);
console.log(kyle.name); // should return 'Kyle'
console.log(kyle.breed); // should return 'Chih'
console.log(kyle.weight); // should return 25
console.log(kyle.bark()); // should return 'ruff! ruff!'
kyle.eatTooManyTreats(); // weight should increase by 1
console.log(kyle.weight); // should be 26

kyle.name = "Kylanister"; // should change name to 'Kylanister'
console.log(kyle.name); // should return 'Kylanister'

kyle.breed = "Chihuahua"; // should change breed to 'Chihuahua'
console.log(kyle.breed); // should return 'Chihuahua'

kyle.weight = 27; // should change weight to 27
console.log(kyle.weight); // should return 27
