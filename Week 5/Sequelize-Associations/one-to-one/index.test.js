const { findInvoice, Order, Invoice } = require("./index.js");
const { db } = require("./db/connection.js");
const { execSync } = require("child_process");
// execSync("npm run seed");

beforeAll(async () => {
  await db.sync();
  const order = await Order.create({
    name: "qwe",
    description: "asd",
    total: 123,
  });
  const invoice = await Invoice.create({ invoiceNumber: 123 });
  order.setInvoice(invoice);
});

test("Should associate", async () => {
  const order = await Order.create({
    name: "asd",
    description: "qwe",
    total: 123,
  });
  const invoice = await Invoice.create({ invoiceNumber: 1 });
  let result;
  const t = async () => {
    await order.hasInvoices();
  };
  try {
    await t();
  } catch (error) {
    result = error;
  }
  expect(result.message).toBe("order.hasInvoices is not a function");
});

test("finds invoice", async () => {
  let result = await findInvoice(1);
  expect(result).toHaveProperty("invoiceNumber", 123);
});

test("Should associate", async () => {
  const order = await Order.create({
    name: "asd",
    description: "qwe",
    total: 123,
  });
  const invoice = await Invoice.create({ invoiceNumber: 1 });
  await order.setInvoice(invoice);
  const result = await Order.findByPk(1, { include: Invoice });
  let test = await order.getInvoice();
  expect(test instanceof Invoice).toBe(true);
});
