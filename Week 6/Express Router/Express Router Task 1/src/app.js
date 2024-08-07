const express = require("express");
const app = express();
// DO NOT EDIT CODE ABOVE

// Import and use routes here
const peopleRouter = require("./routes/people");

app.use("/people", peopleRouter);

// DO NOT EDIT CODE BELOW
module.exports = app;
