/* const { argv } = require("node:process");*/
//const { option } = require("yargs");
const { createTableFile } = require("./helpers/multiplicar");
require('colors')
const argv = require('./config/yargs')

console.clear();

createTableFile(argv.b, argv.l, argv.h)
  .then((fileName) => console.log(fileName.rainbow, "creado"))
  .catch((err) => console.log(err));
