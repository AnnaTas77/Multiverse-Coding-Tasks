const { sequelize, DataTypes } = require("../db.js");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = {
  // WRITE YOUR CODE HERE
  User,
};
