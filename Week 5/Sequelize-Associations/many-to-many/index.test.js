#!/bin/node
const { addToCart, addToProduct, init, Cart, Product } = require("./index.js");

beforeAll(async () => {
  await init();
});

test("is associated", async () => {
  let cart = await Cart.findByPk(2, { include: Product });
  let product = await Product.findByPk(2, { include: Cart });
  expect(cart.Products[0].id).toBe(1);
  expect(product.Carts[0].id).toBe(3);
});
