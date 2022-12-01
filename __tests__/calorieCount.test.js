const calorieCount = require("../calorieCount.js");

describe("calorieCount", () => {
  test("returns 0 if empty array passed in ", () => {
    expect(calorieCount([])).toBe(0);
  });

  test("returns number from array if passed an array with single number", () => {
    expect(calorieCount([1000])).toBe(1000);
  });
});
