// const execSync = require("child_process").execSync;
const app = require("./src/app.js");
const port = 3000; // Set your desired local port
const url = `http://localhost:${port}`;
// DO NOT EDIT CODE ABOVE

// Write your code here

app.listen(port, () => {
  console.log(`The Static Server listening at ${url}`);
});
