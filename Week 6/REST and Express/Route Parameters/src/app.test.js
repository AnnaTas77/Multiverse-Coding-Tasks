const request = require("supertest");
const server = require("./app.js");

test("GET /users/1 returns successful status code", async () => {
  const response = await request(server).get("/users/1");
  expect(response.statusCode).toBe(200);
});

test("GET /users/1 returns first User", async () => {
  const response = await request(server).get("/users/1");
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual(
    expect.objectContaining({
      name: "Billy",
    })
  );
});

test("GET /users/1 returns first User", async () => {
  const response = await request(server).get("/users/2");
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual(
    expect.objectContaining({
      name: "Johnny",
    })
  );
});
