const express = require("express");
const app = express();

// Write your code here
app.get("/flipcoin", (req, res) => {
  const randomNum = Math.floor(Math.random() * 2);
  let result;
  if (randomNum === 0) {
    result = "heads";
  } else {
    result = "tails";
  }
  res.send(result);
});
// DO NOT EDIT CODE BELOW
module.exports = app;
