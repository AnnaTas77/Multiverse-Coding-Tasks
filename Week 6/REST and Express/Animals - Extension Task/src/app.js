const express = require("express");
const app = express();
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
// DO NOT EDIT CODE ABOVE

app.get("/animals/:id", (req, res) => {
  // The ID specified in the URL path should begin with 1, while array indices begin with 0.
  const animalId = req.params.id;
  const animalArrayIndex = animalId - 1;
  const currentAnimal = animals[animalArrayIndex];

  if (!currentAnimal) {
    res.status(404).send({ error: "Animal not found." });
    return;
  }

  res.status(200).json(currentAnimal);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
