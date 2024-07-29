const fetch = require("isomorphic-fetch");

// Add your code here
async function getCats() {
  const response = await fetch("https://meowfacts.herokuapp.com/?count=1");

  const data = await response.json();

  console.log(data);
  return data;
}

getCats();

// DO NOT EDIT CODE BELOW
module.exports = {
  getCats,
};
