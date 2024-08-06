const request = require("supertest");
const server = require("./app.js");

describe("Making a GET Request", () => {
  test("Returns correct response", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
    const responseData = response.text;
    expect(responseData).toEqual("Successful GET Request made!");
  });
});

describe("Making a POST Request", () => {
  test("Returns correct response", async () => {
    const response = await request(server).post("/");
    expect(response.statusCode).toBe(200);
    const responseData = response.text;
    expect(responseData).toEqual("Successful POST Request made!");
  });
});

describe("Making a PUT Request", () => {
  test("Returns correct response", async () => {
    const response = await request(server).put("/");
    expect(response.statusCode).toBe(200);
    const responseData = response.text;
    expect(responseData).toEqual("Successful PUT Request made!");
  });
});

describe("Making a DELETE Request", () => {
  test("Returns correct response", async () => {
    const response = await request(server).delete("/");
    expect(response.statusCode).toBe(200);
    const responseData = response.text;
    expect(responseData).toEqual("Successful DELETE Request made!");
  });
});
