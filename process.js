//process
const process = require("node:process");
console.log(process.argv);

//control de eventos y salidas
process.exit(0); //1, 2

//process events
process.on("exit", () => {
  console.log("terminado");
});

//current working directory, recuperar proceso dependiendo la carpeta

console.log(process.cwd());

console.log(process.env.hate);
