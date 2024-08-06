const express = require("express");
const app = express();

const bakedGoods = [
  "Chocolate Chip Cookies",
  "Blueberry Muffins",
  "Cinnamon Rolls",
  "Banana Bread",
  "Pumpkin Pie",
  "Apple Turnovers",
  "Croissants",
  "Lemon Bars",
  "Red Velvet Cupcakes",
  "Sourdough Bread",
];
//DO NOT EDIT CODE ABOVE

// Write your code here

app.get("/bakedGoods", (req, res) => {
  res.send(bakedGoods);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
