const { db } = require("./db/connection.js");
const rocket = require("./rocket.json");

const initialize = require("./main.js");

let createdRocket;
let foundRockets;
let updatedRocket;
let deletedRocket;

beforeAll(async () => {
  await db.sync({ force: true });
  ({ createdRocket, foundRockets, updatedRocket, deletedRocket } =
    await initialize());
});

it("createdRocket contains the created rocket", () => {
  expect(createdRocket).toEqual(expect.objectContaining(rocket));
});

it("foundRocket contains the queried rocket", () => {
  const [foundRocket] = foundRockets;
  expect(foundRocket).toEqual(expect.objectContaining(rocket));
});

it("updatedRocket contains the updated rocket", () => {
  expect(updatedRocket).toEqual(
    expect.objectContaining({
      name: "High Flyer",
      difficultyLevel: 5,
    })
  );
});

it("deletedRocket contains the deleted rocket", () => {
  // destroy returns the deleted instance
  expect(deletedRocket).toEqual(
    expect.objectContaining({
      name: "High Flyer",
      difficultyLevel: 5,
    })
  );
});
