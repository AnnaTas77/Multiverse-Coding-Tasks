const { Order, Invoice } = require("./models/index.js");
const { db } = require("./db/connection.js");
async function seed() {
  await db.sync({ force: true });
  Order.bulkCreate([
    { name: "Markers", description: "Color what you want", total: 5.99 },
    { name: "Pens", description: "Fancy pens", total: 4.99 },
    { name: "Bulbs", description: "Light up your life", total: 6.99 },
  ]).then(() => console.log("Order data have been saved"));
  Invoice.bulkCreate([
    { invoiceNumber: 123, orderId: 1 },
    { invoiceNumber: 456, orderId: 2 },
    { invoiceNumber: 789, orderId: 3 },
  ]).then(() => console.log("Invoice have been created"));
}
seed();
