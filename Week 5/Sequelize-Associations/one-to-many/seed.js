const { Order } = require("./models/Order");
const { Payment } = require("./models/Payment");
const { db } = require("./db/connection.js");

async function seed() {
  await db.sync({ force: true });
  Order.bulkCreate([
    { name: "Classy Coders Inc.", description: "Tech Supplies", total: 600.5 },
    { name: "FarmersList", description: "Fertelizer", total: 300.23 },
    {
      name: "Operation OOP",
      description: "Aviation equipment",
      total: 1521.09,
    },
  ]).then(() => console.log("Order data have been saved"));
  Payment.bulkCreate([
    { paymentAmount: 400, orderId: 1 },
    { paymentAmount: 199, orderId: 1 },
    { paymentAmount: 300, orderId: 2 },
    { paymentAmount: 650, orderId: null },
  ]).then(() => console.log("Payment have been created"));
}
seed();
