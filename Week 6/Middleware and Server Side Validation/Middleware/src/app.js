const express = require("express");
const app = express();
const usersRouter = require("./routes/users.js");
// Write your code here

app.use("/users", usersRouter);

module.exports = app;
