const Sequelize = require("sequelize");
const db = require("../../db/connection.js");

const User = db.define("user", {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
