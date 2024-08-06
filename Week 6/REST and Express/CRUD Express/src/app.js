const express = require("express");
const app = express();

// Write your code here

app.get("/", (req, res) => {
  res.send(`Successful GET Request made!`);
});

app.post("/", (req, res) => {
  res.send(`Successful POST Request made!`);
});

app.put("/", (req, res) => {
  res.send(`Successful PUT Request made!`);
});

app.delete("/", (req, res) => {
  res.send(`Successful DELETE Request made!`);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
