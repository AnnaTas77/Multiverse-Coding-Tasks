const express = require("express");
const app = express();

// Write your code here

app.get("/:id", (req, res) => {
  const parameter = req.params.id;
  res.send(parameter);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
