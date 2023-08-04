// Playing around with Proxy() object

const gameSettings = {
  difficulty: "easy",
  graphics: "ultra",
  shadows: "low",
  effects: "medium",
  resolution: "1920x1080",
};

const gameSettingsProxy = new Proxy(gameSettings, {
  get: (o, prop) => {
    return prop in o ? o[prop] : `The object has no ${prop} property.`;
  },

  set: (o, prop, value) => {
    if (
      prop === "difficulty" &&
      !["easy", "medium", "hard"].includes(value.toLowerCase())
    ) {
      throw new Error("Difficulty is invalid");
    }
    o[prop] = value;
  },

  has: (o, prop) => {
    if (prop === "difficulty") {
      return false;
    }
    return prop in o;
  },
});

//! get trap
console.log(gameSettingsProxy.resolution);

//! set trap
gameSettingsProxy.difficulty = "easy";
console.log(gameSettingsProxy.difficulty);

//! has trap
console.log("difficulty" in gameSettingsProxy);
console.log("graphics" in gameSettingsProxy);
console.log("123" in gameSettingsProxy);
