const { db, DataTypes, Model } = require("../db/connection.js");

class Rocket extends Model {}

Rocket.init(
  {
    name: DataTypes.STRING,
    difficultyLevel: DataTypes.NUMBER,
  },
  {
    sequelize: db,
    modelName: "Rocket",
  }
);

module.exports = Rocket;
