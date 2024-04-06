const { read, register } = require("./operaciones.js");

const [action, name, age, animal, colour, illness] = process.argv.slice(2);

if (action === "register") {
  register(name, age, animal, colour, illness);
}

if (action === "read") {
  read();
}
