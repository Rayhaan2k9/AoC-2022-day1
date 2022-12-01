const { match } = require("assert");
const fs = require("fs");

function calorieCount(input) {
  if (!input.length) return 0;
  const numArray = input.map((arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
    }
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  });
  return Math.max(...numArray);
}

function topThree(input) {
  const numArray = input.map((arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
    }
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  });
  return numArray
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}
module.exports = { calorieCount, topThree };
