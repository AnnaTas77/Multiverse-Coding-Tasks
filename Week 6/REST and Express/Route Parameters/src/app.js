const express = require("express");
const User = require("./models");
const app = express();
// DO NOT EDIT CODE ABOVE

// Create GET /users route with wildcard parameter here

// Write your code here

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  const currentUser = await User.findByPk(userId);

  res.json(currentUser);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
