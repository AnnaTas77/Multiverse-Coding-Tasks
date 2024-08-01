#!/bin/node
const { db, Model, DataTypes } = require("../db/connection.js");

let Order = db.define("order", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  total: DataTypes.INTEGER,
});

module.exports = Order;
