#!/bin/node
const Cart = require("./Cart.js");
const Product = require("./Product.js");
// DO NOT EDIT CODE ABOVE

// Write associations here

// Write your code here
Cart.belongsToMany(Product, { through: "CartProduct" });
Product.belongsToMany(Cart, { through: "CartProduct" });

// DO NOT EDIT CODE BELOW
module.exports = { Cart, Product };
