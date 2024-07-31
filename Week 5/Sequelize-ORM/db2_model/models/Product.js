const { db, DataTypes, Model } = require("../connection/connection.js");

class Product extends Model {}

Product.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
  },
  { sequelize: db, modelName: "Product" }
);

db.sync();

console.log(Product);

// DO NOT EDIT CODE BELOW
module.exports = Product;
