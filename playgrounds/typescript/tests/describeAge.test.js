// Import the function to be tested
const { describeAge } = require('../describeAge.js');

// Test cases
describe('describeAge', () => {
  test("should return the correct description for different age values", () => {
    // Test case 1: Age <= 12
    expect(describeAge(8)).toBe("You're a(n) kid");
    expect(describeAge(12)).toBe("You're a(n) kid");

    // Test case 2: Age > 12 and < 18
    expect(describeAge(13)).toBe("You're a(n) teenager");
    expect(describeAge(17)).toBe("You're a(n) teenager");

    // Test case 3: Age >= 18 and < 65
    expect(describeAge(25)).toBe("You're a(n) adult");
    expect(describeAge(50)).toBe("You're a(n) adult");

    // Test case 4: Age >= 65
    expect(describeAge(70)).toBe("You're a(n) elderly");
    expect(describeAge(80)).toBe("You're a(n) elderly");
  });

  // Additional test cases if needed
});
