const request = require("supertest");
const app = require("./app.js");

describe("GET /", () => {
  test("should return a static page", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
