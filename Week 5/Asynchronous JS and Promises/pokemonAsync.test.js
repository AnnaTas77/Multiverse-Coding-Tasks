// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
const fetchPokemon = require("./pokemonAsync");

test("should return a promise", async () => {
  const returnValue = fetchPokemon();
  expect(typeof returnValue).toBe("object");
  expect(typeof returnValue.then).toBe("function");
});

test("returns a promise", async () => {
  const data = await fetchPokemon();
  expect(data).toEqual([
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon-form/3/",
    },
  ]);
});

test("is a function", async () => {
  expect(typeof fetchPokemon).toBe("function");
});
