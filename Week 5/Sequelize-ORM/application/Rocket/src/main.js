const Rocket = require("./models/index.js");
const { db } = require("./db/connection.js");
const rocket = require("./rocket.json");

async function initialize() {
  // Uncomment the line below to run any debugging
  //   await db.sync({ force: true });

  let createdRocket = await Rocket.create({
    name: "Big Boy",
    difficultyLevel: 3,
  });
  //   console.log(createdRocket);

  const firstRocketVersion = {
    name: createdRocket && createdRocket.name,
    difficultyLevel: createdRocket && createdRocket.difficultyLevel,
  };

  let foundRockets = await Rocket.findAll({ raw: true });
  console.log("All Rockets Array: ", foundRockets);

  let updatedRocket; // = YOUR CODE HERE
  // WRITE YOUR CODE HERE

  await Rocket.update(
    { name: "High Flyer", difficultyLevel: 5 },
    { where: { name: "Big Boy" } }
  );

  updatedRocket = await Rocket.findByPk(1);

  console.log("Updated Rocket: ", updatedRocket.toJSON());

  const firstUpdate = {
    name: updatedRocket && updatedRocket.name,
    difficultyLevel: updatedRocket && updatedRocket.difficultyLevel,
  };

  let deletedRocket; // = YOUR CODE HERE
  // WRITE YOUR CODE HERE

  deletedRocket = await Rocket.findByPk(1);

  await Rocket.destroy({ where: { name: "High Flyer" } });

  console.log("Deleted rocket: ", deletedRocket.toJSON());

  // DO NOT EDIT BELOW
  return {
    createdRocket: firstRocketVersion,
    foundRockets,
    updatedRocket: firstUpdate,
    deletedRocket,
  };
}
// Uncomment the line below to run any debugging
// initialize();

// DO NOT EDIT BELOW
module.exports = initialize;
