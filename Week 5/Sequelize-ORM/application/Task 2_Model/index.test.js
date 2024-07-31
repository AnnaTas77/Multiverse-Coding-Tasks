// model
const Rocket = require("./Rocket.js");
// connection
const { db } = require("./db/connection.js");
// seed data
const rockets = require("./rockets.json");

beforeAll(async () => {
  await db.sync({ force: true });
});

it("Rocket model can insert and query all rockets", async () => {
  const createdRocket = await Rocket.create(rockets[0]);
  expect(createdRocket).toEqual(expect.objectContaining(rockets[0]));

  const [foundRocket] = await Rocket.findAll();
  expect(foundRocket).toEqual(
    expect.objectContaining({
      name: "Big Boy",
      difficultyLevel: 3,
    })
  );
});
