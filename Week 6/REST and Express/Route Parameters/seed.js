const User = require("./src/models");
const seedData = require("./seedData.js");
const db = require("./db/connection.js");

const syncSeed = async () => {
  await db.sync({ force: true });
  await User.bulkCreate(seedData);
};

syncSeed();
