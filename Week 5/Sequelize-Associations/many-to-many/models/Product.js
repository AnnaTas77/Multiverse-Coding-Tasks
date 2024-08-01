#!/bin/node
const { db, Model, DataTypes } = require("../db/connection.js");

let Product = db.define("Product", {
  item: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

module.exports = Product;
