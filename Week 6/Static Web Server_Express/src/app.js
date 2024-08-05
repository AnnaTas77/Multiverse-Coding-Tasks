const express = require("express");
// DO NOT EDIT CODE ABOVE

// Write your code here
const app = express();

//Invoke app.use() method with express.static() to serve the content that is located in the public folder.
app.use(express.static("public"));

//DO NOT EDIT CODE BELOW
module.exports = app;
