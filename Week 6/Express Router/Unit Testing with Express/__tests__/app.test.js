const request = require("supertest");
const app = require("../src/app");

describe("GET /users", () => {
  test("GET /users returns an array of all users", async () => {
    const response = await request(app).get("/users");
    expect(response.body).toEqual(["Johnny", "Andy", "Simon"]);
  });
});

describe("POST /users", () => {
  test("POST /users returns an array of all users", async () => {
    const response = await request(app).post("/users").send({ name: "Anna" });
    expect(response.body).toEqual(["Johnny", "Andy", "Simon", "Anna"]);
  });
});
