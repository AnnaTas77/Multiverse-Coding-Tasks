#!/bin/node
const { Order, Payment, findPayment, updatePayment } = require("./index1.js");
const { db } = require("./db/connection.js");
let order, payment, payment1, payment2;
beforeEach(async () => {
  await db.sync({ force: true });
  Order.destroy({ truncate: true });
  Payment.destroy({ truncate: true });
  order = await Order.create({
    name: "qwe",
    description: "asd",
    total: 123,
  });

  payment = await Payment.create({
    paymentAmount: 123,
  });

  payment1 = await Payment.create({
    paymentAmount: 123,
  });

  payment2 = await Payment.create({
    paymentAmount: 456,
  });
});

test("is associated", async () => {
  await order.setPayments([payment1, payment2]);
  const result = await Order.findByPk(1, {
    include: Payment,
  });
  expect(result.payments.length).toBe(2);
});

test("finds payment", async () => {
  await order.setPayments([payment1, payment2]);
  const result = await findPayment(order.id);
  expect(result[0]).toHaveProperty("paymentAmount", 123);
  //   expect(result[1]).toHaveProperty("paymentAmount", 456);
});

test("updates payment", async () => {
  await updatePayment(order.id, payment.id);
  const result = await findPayment(order.id);
  expect(result[0]).toHaveProperty("paymentAmount", 123);
});
