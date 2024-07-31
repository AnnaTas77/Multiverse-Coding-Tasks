const { db, Model, DataTypes } = require("./db/connection.js");

class Rocket extends Model {}

Rocket.init(
  {
    name: DataTypes.STRING,
    difficultyLevel: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "Rocket",
  }
);

module.exports = Rocket;
