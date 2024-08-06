const request = require("supertest");
const server = require("./app.js");

// GET

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

// DELETE

describe("DELETE Animals", () => {
  test("should delete lion from full list of animals", async () => {
    const response = await request(server).delete("/animals/2");
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual([
      {
        name: "Zebra",
        color: "Mixed",
      },
      {
        name: "Tiger",
        color: "Orange",
      },
      {
        name: "Bear",
        color: "Brown",
      },
    ]);
  });
});

describe("DELETE Animals", () => {
  test("should delete zebra from full list of animals", async () => {
    const response = await request(server).delete("/animals/1");
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual([
      {
        name: "Tiger",
        color: "Orange",
      },
      {
        name: "Bear",
        color: "Brown",
      },
    ]);
  });
});

describe("DELETE Animals", () => {
  test("should delete bear from full list of animals", async () => {
    const response = await request(server).delete("/animals/2");
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual([
      {
        name: "Tiger",
        color: "Orange",
      },
    ]);
  });
});

// PUT
describe("PUT /animals tests", () => {
  test("should update lion from full list of animals to frog", async () => {
    const response = await request(server)
      .put("/animals/2")
      .send({ name: "Frog", color: "Green" });
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);

    expect(responseData).toEqual([
      {
        name: "Zebra",
        color: "Mixed",
      },
      {
        name: "Frog",
        color: "Green",
      },
      {
        name: "Tiger",
        color: "Orange",
      },
      {
        name: "Bear",
        color: "Brown",
      },
    ]);
  });

  test("should update bear from full list of animals to snake", async () => {
    const response = await request(server)
      .put("/animals/4")
      .send({ name: "Snake", color: "Green" });
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual([
      {
        name: "Zebra",
        color: "Mixed",
      },
      {
        name: "Frog",
        color: "Green",
      },
      {
        name: "Tiger",
        color: "Orange",
      },
      {
        name: "Snake",
        color: "Green",
      },
    ]);
  });

  test("should update zebra from full list of animals to kangaroo", async () => {
    const response = await request(server)
      .put("/animals/1")
      .send({ name: "Kangaroo", color: "Brown" });
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual([
      {
        name: "Kangaroo",
        color: "Brown",
      },
      {
        name: "Frog",
        color: "Green",
      },
      {
        name: "Tiger",
        color: "Orange",
      },
      {
        name: "Snake",
        color: "Green",
      },
    ]);
  });
});

//POST

describe.only("POST /animal tests", () => {
  const animals = [
    {
      name: "Zebra",
      color: "Mixed",
    },
    {
      name: "Lion",
      color: "Gold",
    },
    {
      name: "Tiger",
      color: "Orange",
    },
    {
      name: "Bear",
      color: "Brown",
    },
  ];
  test("should add snake to full list of animals", async () => {
    const response = await request(server)
      .post("/animals")
      .send({ name: "Snake", color: "Green" });
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual([
      { name: "Zebra", color: "Mixed" },
      { name: "Lion", color: "Gold" },
      { name: "Tiger", color: "Orange" },
      { name: "Bear", color: "Brown" },
      { name: "Snake", color: "Green" },
    ]);
  });
});
