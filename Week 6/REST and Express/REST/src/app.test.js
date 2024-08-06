const request = require("supertest");
const server = require("./app.js");
const bakedGoods = [
  "Chocolate Chip Cookies",
  "Blueberry Muffins",
  "Cinnamon Rolls",
  "Banana Bread",
  "Pumpkin Pie",
  "Apple Turnovers",
  "Croissants",
  "Lemon Bars",
  "Red Velvet Cupcakes",
  "Sourdough Bread",
];

describe("GET /bakedGoods", () => {
  test("returns an array of baked goods", async () => {
    const response = await request(server).get("/bakedGoods");
    expect(response.statusCode).toBe(200);
    const responseData = JSON.parse(response.text);
    expect(responseData).toEqual(bakedGoods);
  });
});
