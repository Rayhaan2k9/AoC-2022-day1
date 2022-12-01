const fs = require("fs/promises");
const { array } = require("yargs");

const input = fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  return data;
});

function calorieCount(input) {
  if (!input.length) return 0;

  const numArr = input.split(" ");
  let highestCals = 0;

  for (let i = 0; i < numArr.length; i++) {
    highestCals += Number(numArr[i]);
  }
  return highestCals;
}

module.exports = calorieCount;
