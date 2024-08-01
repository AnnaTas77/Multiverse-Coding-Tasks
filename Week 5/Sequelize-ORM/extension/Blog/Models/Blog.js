const { sequelize, DataTypes } = require("../db.js");

const Blog = sequelize.define("Blog", {
  title: DataTypes.STRING,
  post: DataTypes.STRING,
  postNumber: DataTypes.INTEGER,
});

module.exports = {
  // WRITE YOUR CODE HERE
  Blog,
};
