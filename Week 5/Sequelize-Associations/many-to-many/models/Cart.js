#!/bin/node
const { db, Model, DataTypes } = require("../db/connection.js");

let Cart = db.define("Cart", {
  total: DataTypes.INTEGER,
});

module.exports = Cart;
