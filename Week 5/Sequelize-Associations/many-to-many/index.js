const { Cart, Product } = require("./models/index");
const { db } = require("./db/connection");
const seed = require("./seed");
// DO NOT EDIT CODE ABOVE

async function addToCart(productId, cartId) {
  // Write queries here
  // WRITE YOUR CODE HERE

  const foundProduct = await Product.findByPk(productId);
  const foundCart = await Cart.findByPk(cartId);

  // console.log("Found Product", foundProduct.toJSON());
  // console.log("Found Cart", foundCart.toJSON());

  await foundProduct.setCarts(foundCart);

  const productWithCarts = await Product.findByPk(productId, { include: Cart });

  // console.log("Updated Product: ", productWithCarts.toJSON());
  return productWithCarts.toJSON();
}
async function addToProduct(cartId, productId) {
  // Write queries here
  // WRITE YOUR CODE HERE
  const foundProduct = await Product.findByPk(productId);
  const foundCart = await Cart.findByPk(cartId);

  // console.log("Found Product", foundProduct.toJSON());
  // console.log("Found Cart", foundCart.toJSON());

  await foundCart.setProducts(foundProduct);

  const cartWithProducts = await Cart.findByPk(cartId, { include: Product });

  // console.log("Updated Cart: ", cartWithProducts.toJSON());
  return cartWithProducts.toJSON();
}

async function init() {
  try {
    await db.sync();
    await seed();
  } catch (err) {
    console.error(err);
  }
  await addToCart(1, 2);
  await addToProduct(3, 2);
}
// init();

// DO NOT EDIT CODE BELOW
module.exports = {
  addToCart,
  addToProduct,
  init,
  Cart,
  Product,
};
