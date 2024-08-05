const express = require("express");
const app = express();
// DO NOT EDIT CODE ABOVE

app.get("/random", (request, response) => {
  // Write your code here
  let randomNum = Math.floor(Math.random() * 3);
  response.send(`Random number: ${randomNum}`);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
