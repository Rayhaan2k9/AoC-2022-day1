const calorieCount = require("../calorieCount.js");

describe("calorieCount", () => {
  test("returns 0 if empty array passed in ", () => {
    expect(calorieCount([])).toBe(0);
  });
});
