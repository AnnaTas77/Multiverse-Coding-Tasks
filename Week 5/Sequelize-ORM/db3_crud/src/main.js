const Product = require("./model/index.js");
const db = require("./connection/connection.js");

const initialize = async () => {
  // Uncomment the line below to run any debugging, but make sure to comment it out before running the tests.
  //   await db.sync({ force: true });

  // Create products
  let allProducts;
  // Write your code here
  try {
    await Product.create({
      name: "Wireless Earbuds",
      description: "True wireless earbuds with noise canceling technology",
      price: 149.99,
    });
    await Product.create({
      name: "Smartphone",
      description: "A high-quality smartphone with advanced features",
      price: 799.99,
    });
    await Product.create({
      name: "Laptop",
      description: "A powerful laptop with high-end specifications",
      price: 1499.99,
    });

    allProducts = await Product.findAll({ raw: true });
    console.log("All products array: ", allProducts);
  } catch (err) {
    console.log(err);
  }

  // Find item with ID of 2
  let foundItem;
  // Write your code here
  foundItem = await Product.findByPk(2);
  console.log("FOUND by ID: ", foundItem.toJSON());

  // Update item with ID of 2
  let updatedItem;
  // Write your code here

  await Product.update(
    { name: "iPhone" },
    {
      where: { id: 2 },
    }
  );

  updatedItem = await Product.findByPk(2);

  console.log("UPDATED: ", updatedItem.toJSON());

  // Delete item with ID of 2
  let deletedProduct;
  // Write your code here
  deletedProduct = await Product.findByPk(2);
  await Product.destroy({ where: { id: 2 } });
  console.log("DELETED: ", deletedProduct);
  // DO NOT EDIT
  return {
    allProducts,
    updatedItem,
    deletedProduct,
  };
  // DO NOT EDIT
};

// Uncomment the line below to run any debugging, but make sure to comment it out before you run the tests!
// initialize();

// DO NOT EDIT CODE BELOW
module.exports = { initialize };
