const request = require("supertest");
const server = require("./app.js");

describe("GET particular animal", () => {
  test("should respond with Zebra Data", async () => {
    const response = await request(server).get("/animals/1");
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual({
      name: "Zebra",
      color: "Mixed",
    });
  });
  test("should respond with Lion Data", async () => {
    const response = await request(server).get("/animals/2");
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual({
      name: "Lion",
      color: "Gold",
    });
  });
  test("should respond with Bear Data", async () => {
    const response = await request(server).get("/animals/4");
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual({
      name: "Bear",
      color: "Brown",
    });
  });
});
