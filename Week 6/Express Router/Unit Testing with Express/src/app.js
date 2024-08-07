const express = require("express");
const app = express();

const users = ["Johnny", "Andy", "Simon"];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  users.push(req.body.name);
  res.json(users);
});

module.exports = app;
