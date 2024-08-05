const request = require("supertest");
const app = require("./app.js");

describe("GET /flipcoin", () => {
  test("should respond with heads or tails", async () => {
    const response = await request(app).get("/flipcoin");
    expect(response.statusCode).toBe(200);
    if (response.text == "heads") {
      expect(response.text).toEqual("heads");
    } else {
      expect(response.text).toEqual("tails");
    }
  });
});
