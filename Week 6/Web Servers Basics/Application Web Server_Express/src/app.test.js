const request = require("supertest");
const server = require("./app.js");

describe("GET /random", () => {
  test("should respond with random number of 0, 1, or 2", async () => {
    const response = await request(server).get("/random");
    expect(response.statusCode).toBe(200);
    if (response.text == "Random number: 0") {
      expect(response.text).toEqual("Random number: 0");
    } else if (response.text == "Random number: 1") {
      expect(response.text).toEqual("Random number: 1");
    } else {
      expect(response.text).toEqual("Random number: 2");
    }
  });
});
