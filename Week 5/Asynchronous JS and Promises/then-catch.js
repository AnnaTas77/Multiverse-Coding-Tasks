const fetch = require("isomorphic-fetch");
// DO NOT EDIT ABOVE THIS LINE

fetch("https://meowfacts.herokuapp.com/?count=1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
