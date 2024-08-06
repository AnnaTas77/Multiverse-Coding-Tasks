const request = require("supertest");
const server = require("./app.js");

describe("GET Parameter ID Value", () => {
  test("should respond ID parameter value 3", async () => {
    const response = await request(server).get("/3");
    expect(response.statusCode).toBe(200);
    const responseData = response.text;
    expect(responseData).toEqual("3");
  });

  test("should respond ID parameter value 8", async () => {
    const response = await request(server).get("/8");
    expect(response.statusCode).toBe(200);
    const responseData = response.text;
    expect(responseData).toEqual("8");
  });

  test("should respond ID parameter value 15", async () => {
    const response = await request(server).get("/15");
    expect(response.statusCode).toBe(200);
    const responseData = response.text;
    expect(responseData).toEqual("15");
  });
});
