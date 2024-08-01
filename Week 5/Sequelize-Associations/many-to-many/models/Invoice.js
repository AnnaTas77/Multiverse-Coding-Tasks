const { db, DataTypes, Model } = require("../db/connection.js");

class Invoice extends Model {}

Invoice.init(
  {
    invoiceNumber: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
  },
  {
    sequelize: db,
  }
);

module.exports = Invoice;
