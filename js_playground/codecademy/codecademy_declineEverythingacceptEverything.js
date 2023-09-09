const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

console.log(declineEverything(veggies));

const acceptEverything = (arr) => {
  arr.forEach((e) => console.log(`Ok, I guess I will eat some ${e}.`));
};

console.log(acceptEverything(veggies));
