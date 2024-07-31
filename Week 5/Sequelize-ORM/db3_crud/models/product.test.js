const db = require("../connection/connection.js");
const values = require("./seed.json");

const { initialize } = require("./product.js");

let allProducts;
let foundItem;
let updatedItem;
let deletedProduct;

beforeAll(async () => {
  await db.sync({ force: true });
  ({ allProducts, updatedItem, deletedProduct } = await initialize());
});

test("allProducts contains created products", () => {
  expect(allProducts[0]).toEqual(expect.objectContaining(values[0]));
  expect(allProducts[1]).toEqual(expect.objectContaining(values[1]));
  expect(allProducts[2]).toEqual(expect.objectContaining(values[2]));
});

test("updatedItem contains the updated item", () => {
  expect(updatedItem).toEqual(
    expect.objectContaining({
      name: "iPhone",
      description: "A high-quality smartphone with advanced features",
      price: 799.99,
    })
  );
});

test("deletedProduct contains the deleted product", () => {
  // destroy returns the deleted instance
  expect(deletedProduct).toEqual(
    expect.objectContaining({
      name: "iPhone",
      description: "A high-quality smartphone with advanced features",
      price: 799.99,
    })
  );
});
