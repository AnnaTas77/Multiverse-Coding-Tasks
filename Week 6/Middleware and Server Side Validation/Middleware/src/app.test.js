const server = require("./app");
const request = require("supertest");

test("Returns all users", async () => {
  const response = await request(server).get("/users");
  expect(response.statusCode).toBe(200);
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual([
    { name: "Rick", age: 72 },
    { name: "Morty", age: 14 },
    { name: "Jerry", age: 42 },
  ]);
});

test("POST /users updates users array", async () => {
  const response = await request(server)
    .post("/users")
    .send({ name: "Spongebob", age: 22 });
  expect(response.statusCode).toBe(200);
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual([
    { name: "Rick", age: 72 },
    { name: "Morty", age: 14 },
    { name: "Jerry", age: 42 },
    { name: "Spongebob", age: 22 },
  ]);
});
