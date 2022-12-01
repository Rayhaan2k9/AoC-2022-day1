const { calorieCount, topThree } = require("./calorieCount.js");
const fs = require("fs");

function data() {
  const input = fs.readFileSync("./input.txt", "utf-8");
  const result = input.split("\n\n");
  return result;
}

const snacks = data();
const elfData = snacks.map((snack) => snack.split("\n"));

describe("calorieCount", () => {
  test("returns 0 if empty array passed in ", () => {
    expect(calorieCount([])).toBe(0);
  });

  test("returns number from array if passed a array with single number", () => {
    expect(calorieCount([["1000"]])).toBe(1000);
  });

  test("returns total of multiple numbers passed in without spaces", () => {
    expect(calorieCount([["1000", "2000", "3000"]])).toBe(6000);
  });

  test("returns highest calories from array of separated numbers", () => {
    expect(
      calorieCount([
        ["1000", "2000", "3000"],
        ["2000", "1000", "4000"],
      ])
    ).toBe(7000);
  });

  test("final result", () => {
    expect(calorieCount(elfData)).toBe(68775);
  });
});

describe("topThree", () => {
  test("returns total of highest 3 numbers in array", () => {
    expect(
      topThree([
        ["1000", "2000", "3000"],
        ["2000", "1000", "4000"],
        ["5000", "6000", "5000"],
        ["20000"],
        ["4000", "60000"],
        ["20000", "20000"],
      ])
    ).toBe(124000);
  });

  test("final result", () => {
    expect(topThree(elfData)).toBe(202585);
  });
});
