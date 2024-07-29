const fetch = require("isomorphic-fetch");
// DO NOT EDIT ABOVE

// Write your code here

const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/3");
    const data = await response.json();
    return data.forms;
  } catch (error) {
    console.log(error);
  }
};

fetchPokemon();

// DO NOT EDIT CODE BELOW
module.exports = fetchPokemon;
