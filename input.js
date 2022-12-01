const fs = require("fs/promises");

const input = fs.readFile("./input.txt", "utf-8", (err, data) => {
  return data;
});

function data() {
  return input.then((err, data) => {
    console.log(data);
  });
}

data();
