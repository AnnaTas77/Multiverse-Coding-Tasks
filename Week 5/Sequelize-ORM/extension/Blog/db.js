const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});
// sequelize.authenticate()
module.exports = {
  // WRITE YOUR CODE HERE
  sequelize,
  DataTypes,
};
