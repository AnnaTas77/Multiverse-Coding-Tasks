// Imports the built-in readline module provided by Node.js.
const readline = require("readline");

// Creates a readline interface that we can use in our code.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asks the user a question and gets their answer.
rl.question("What is your favorite color? ", function (favColor) {
  console.log("Your favorite color is: " + favColor);
  rl.close();
});
