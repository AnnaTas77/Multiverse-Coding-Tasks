const server = require("./app");
const request = require("supertest");

test("Returns correct response", async () => {
  const response = await request(server).get("/people");
  expect(response.statusCode).toBe(200);
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual([
    { name: "Jessica", age: 22 },
    { name: "Alicia", age: 26 },
    { name: "Nick", age: 32 },
    { name: "Fatima", age: 44 },
  ]);
});

test("Returns correct response", async () => {
  const response = await request(server).get("/people/2");
  expect(response.statusCode).toBe(200);
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual({ name: "Alicia", age: 26 });
});
