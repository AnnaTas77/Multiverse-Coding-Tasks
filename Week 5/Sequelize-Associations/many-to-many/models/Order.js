const { db, DataTypes, Model } = require("../db/connection.js");

class Order extends Model {}

Order.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    total: DataTypes.INTEGER,
  },
  { sequelize: db }
);

module.exports = Order;
