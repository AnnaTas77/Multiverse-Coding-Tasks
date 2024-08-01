#!/bin/node
const { db } = require("./db/connection.js");
const { Cart, Product } = require("./models/index");

async function seed() {
  await db.sync({ force: true });
  await Cart.bulkCreate([
    { total: 22.5 },
    { total: 300.23 },
    { total: 1521.09 },
  ]);

  await Product.bulkCreate([
    { item: "Laptop", price: 1500 },
    { item: "Tablet", price: 800 },
    { item: "Strawberries", price: 4.99 },
    { item: "Mangos", price: 2.99 },
    { item: "Headphones", price: 50 },
  ]);
}

module.exports = seed;
