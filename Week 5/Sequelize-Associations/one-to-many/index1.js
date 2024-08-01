const { Order, Payment } = require("./models/index.js");
// DO NOT EDIT CODE ABOVE

// Write associations here

Order.hasMany(Payment);
Payment.belongsTo(Order);

// WRITE YOUR CODE HERE

async function findPayment(id) {
  // Write queries here
  // WRITE YOUR CODE HERE
  // const allOrders = await Order.bulkCreate([
  //     { name: "Classy Coders Inc.", description: "Tech Supplies", total: 600.5 },
  //     { name: "FarmersList", description: "Fertelizer", total: 300.23 },
  //     {
  //       name: "Operation OOP",
  //       description: "Aviation equipment",
  //       total: 1521.09,
  //     }])

  // const allPayments = await Payment.bulkCreate([
  //     { paymentAmount: 400, orderId: 1 },
  //     { paymentAmount: 199, orderId: 1 },
  //     { paymentAmount: 300, orderId: 2 },
  //     { paymentAmount: 650, orderId: null },
  //   ])

  const allPayments = await Payment.findAll();

  const foundOrder = await Order.findByPk(id);

  // console.log(foundOrder.toJSON())

  await foundOrder.setPayments(allPayments);

  const orderWithPayments = await Order.findOne({
    where: { id: id },
    include: Payment,
  });

  // console.log(orderWithPayments.toJSON())

  return orderWithPayments.toJSON().payments;
}

async function updatePayment(orderId, paymentId) {
  // Write queries here

  // WRITE YOUR CODE HERE

  const foundOrder = await Order.findByPk(orderId);
  const foundPayment = await Payment.findByPk(paymentId);

  console.log("Found Order", foundOrder.toJSON());
  console.log("Found payment", foundPayment.toJSON());

  await foundOrder.addPayments(foundPayment);

  const orderWithNewPayment = await Order.findOne({
    where: { id: orderId },
    include: Payment,
  });

  console.log(orderWithNewPayment.toJSON());

  return orderWithNewPayment.toJSON();
}

// findPayment(1);
// updatePayment(3, 4);

// DO NOT EDIT CODE BELOW
module.exports = {
  findPayment,
  updatePayment,
  Order,
  Payment,
};
