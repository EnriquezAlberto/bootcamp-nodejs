const fs = require("node:fs/promises");
const { promisify } = require("node:util");

const readFile = promisify(fs.readFile);

console.log("leyendo el primer archivo...");

const text = fs.readFile("./archivo.txt", "utf8").then((text) => {
  console.log("primero:", text);
});

console.log("leyendo el segundo...");

const text2 = fs.readFile("./archivo2.txt", "utf8").then((text) => {
  console.log("segundo:", text);
});
