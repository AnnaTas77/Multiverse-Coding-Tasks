const { db, DataTypes, Model } = require("../db/connection.js");

let Payment = db.define("payment", {
  paymentAmount: DataTypes.INTEGER,
  orderId: DataTypes.INTEGER,
});

module.exports = Payment;
