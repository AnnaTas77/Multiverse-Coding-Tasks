// Install dependencies
const { execSync } = require("child_process");
execSync("npm install");
// import required files
const server = require("./app");
const request = require("supertest");

test("GET /restaurants returns all restaurants", async () => {
  const response = await request(server).get("/restaurants");
  expect(response.statusCode).toBe(200);
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual([
    { name: "Bobs Burgers", location: "New York City" },
    { name: "Harry's Fish Shack", location: "London" },
    { name: "Elizabeth's Hot Dogs", location: "Chicago" },
  ]);
});

test("POST /restaurants updates restaurants array", async () => {
  const response = await request(server)
    .post("/restaurants")
    .send({ name: "Ippudo", location: "NYC" });
  expect(response.statusCode).toBe(200);
  const responseData = JSON.parse(response.text);
  expect(responseData).toEqual([
    { name: "Bobs Burgers", location: "New York City" },
    { name: "Harry's Fish Shack", location: "London" },
    { name: "Elizabeth's Hot Dogs", location: "Chicago" },
    { name: "Ippudo", location: "NYC" },
  ]);
});

test("POST /restaurants returns error key with array if name field is empty", async () => {
  const response = await request(server)
    .post("/restaurants")
    .send({ name: "", location: "NYC" });
  expect(response.statusCode).toBe(200);
  const responseData = JSON.parse(response.text);
  expect(responseData.error).toEqual([
    {
      value: "",
      msg: "Invalid value",
      path: "name",
      type: "field",
      location: "body",
    },
  ]);
});
