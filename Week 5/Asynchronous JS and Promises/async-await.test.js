// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
const { getCats } = require("./async-await");

test("should return a promise", async () => {
  const returnValue = getCats();
  expect(typeof returnValue).toBe("object");
  expect(typeof returnValue.then).toBe("function");
});

test("Returns an array of a single cat fact", async () => {
  const returnedValue = await getCats();
  expect(returnedValue.data.length).toEqual(1);
  expect(typeof returnedValue.data[0]).toEqual("string");
});
