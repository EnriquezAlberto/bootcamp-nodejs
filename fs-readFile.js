const fs = require("node:fs");

console.log("leyendo el primer archivo...");

const text = fs.readFile("./archivo.txt", "utf8", (err, text) => {
  console.log(text);
});

const text2 = fs.readFile("./archivo2.txt", "utf8", (err, text) => {
  console.log("leyendo el segundo...");
  console.log(text);
});
