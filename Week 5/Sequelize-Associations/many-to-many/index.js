const { Order, Invoice } = require("./models/index.js");
// DO NOT EDIT CODE ABOVE

// Define your association
// WRITE YOUR CODE HERE
Order.hasOne(Invoice);
Invoice.belongsTo(Order);

async function findInvoice(id) {
  // get the invoice
  // WRITE YOUR CODE HERE
  const order = await Order.findByPk(id);
  let invoice = await order.getInvoice(Invoice);
  invoice = invoice.toJSON();
  console.log(invoice);

  return invoice;

  // const orderWithInvoice = await Order.findOne({
  //     where: {}
  // })
}

// DO NOT EDIT CODE BELOW
module.exports = {
  findInvoice,
  Order,
  Invoice,
};
