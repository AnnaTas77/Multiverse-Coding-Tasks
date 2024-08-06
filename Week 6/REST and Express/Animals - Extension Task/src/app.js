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
app.use(express.json());

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

app.delete("/animals/:id", (req, res) => {
  const animalId = req.params.id;
  const animalArrayIndex = animalId - 1;
  animals.splice(animalArrayIndex, 1);
  res.json(animals);
});

app.put("/animals/:id", (req, res) => {
  animals[req.params.id - 1] = {
    name: req.body.name,
    color: req.body.color,
  };
  res.json(animals);
});

app.post("/animals", (req, res) => {
  animals.push({
    name: req.body.name,
    color: req.body.color,
  });
  res.json(animals);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
