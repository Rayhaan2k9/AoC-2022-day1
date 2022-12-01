const fs = require("fs/promises");

const input = fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  return data;
});

function calorieCount(input) {
  return input.length ? input[0] : 0;
}

module.exports = calorieCount;
