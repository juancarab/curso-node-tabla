const fs = require("fs");
const colors = require("colors");
//const { rejects } = require("node:assert");
//const { resolve } = require("node:path");

const createTableFile = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("=====================".green);
      console.log(` Tabla del: ${base}`);
      console.log("=====================".red);

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTableFile,
};
