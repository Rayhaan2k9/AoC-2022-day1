const calorieCount = require("../calorieCount.js");

describe("calorieCount", () => {
  test("returns 0 if empty string passed in ", () => {
    expect(calorieCount("")).toBe(0);
  });

  test("returns number from array if passed a string with single number", () => {
    expect(calorieCount("1000")).toBe(1000);
  });

  test("returns total of multiple numbers passed in without spaces", () => {
    expect(calorieCount("1000 2000 3000")).toBe(6000);
  });
});
