const express = require("express");
const app = express();
const restaurantsRouter = require("./routes/restaurants");
// Import and use routes here

app.use("/restaurants", restaurantsRouter);

// DO NOT EDIT CODE BELOW
module.exports = app;
