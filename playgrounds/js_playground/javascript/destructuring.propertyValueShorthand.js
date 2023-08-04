// Usual way of writing object literals
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

// To check that the object literals work:
const newRobot = robotFactory("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// Refactored factory function to use the property value shorthand technique
const robotFactory_new = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

// To check that the property value shorthand technique worked:
const newRobot_new = robotFactory_new("P-501", false);
console.log(newRobot_new.model);
console.log(newRobot_new.mobile);
