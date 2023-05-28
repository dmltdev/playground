// Import the function to be tested

const { pillars } = require('../pillars.js');

// Test cases
describe('pillars', () => {
  test("should return the distance between pillars", () => {
    // Test case 1: Age <= 12
    expect(pillars(1, 10, 10)).toEqual(0);
    expect(pillars(2, 20, 25)).toEqual(2000);

    // Test case 2: Age > 12 and < 18
    expect(pillars(13)).toEqual("You're a(n) teenager");
    expect(pillars(17)).toEqual("You're a(n) teenager");

    // Test case 3: Age >= 18 and < 65
    expect(pillars(25)).toEqual("You're a(n) adult");
    expect(pillars(50)).toEqual("You're a(n) adult");

    // Test case 4: Age >= 65
    expect(pillars(70)).toEqual("You're a(n) elderly");
    expect(pillars(80)).toEqual("You're a(n) elderly");
  });

  // Additional test cases if needed
});
