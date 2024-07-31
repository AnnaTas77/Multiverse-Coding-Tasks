const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize");

// Write your code here

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

console.log(db);

// DO NOT EDIT CODE BELOW
module.exports = { db, DataTypes, Model };
