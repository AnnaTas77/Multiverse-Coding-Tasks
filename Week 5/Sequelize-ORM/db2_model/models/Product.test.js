// model
const Product = require("./product.js");
// connection
const { db } = require("../connection/connection.js");
// seed data
const item = require("./seed.json");

beforeAll(async () => {
  await db.sync({ force: true });
});

test("Product model can insert and query all products", async () => {
  const createdProduct = await Product.create(item[0]);
  expect(createdProduct).toEqual(expect.objectContaining(item[0]));
  const [foundProduct] = await Product.findAll();
  expect(foundProduct).toEqual(
    expect.objectContaining({
      name: "Smartphone",
      description: "A high-quality smartphone with advanced features.",
      price: 699.99,
    })
  );
});
