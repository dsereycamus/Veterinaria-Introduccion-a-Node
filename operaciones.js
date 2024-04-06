const fs = require("fs");
const register = (name, age, animal, colour, illness) => {
  if (!name || !age || !animal || !colour || !illness) {
    console.log("Por favor, ingrese todos los campos requeridos🐾");
    return;
  }
  if (fs.existsSync("citas.json")) {
    const register = JSON.parse(fs.readFileSync("citas.json", "utf8"));
    if (register.find((pet) => pet.name === name)) {
      console.log(`La mascota con nombre '${name}' ya existe.`);
      return;
    }
    register.push({ name, age, animal, colour, illness });
    fs.writeFileSync("citas.json", JSON.stringify(register));
  } else {
    fs.writeFileSync(
      "citas.json",
      JSON.stringify([{ name, age, animal, colour, illness }])
    );
  }
  console.log({ name, age, animal, colour, illness });
};

const read = () => {
  const register = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(register);
};

module.exports = { register, read };
