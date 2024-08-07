const express = require("express");
const { Router } = require("express");

let people = [
  { name: "Jessica", age: 22 },
  { name: "Alicia", age: 26 },
  { name: "Nick", age: 32 },
  { name: "Fatima", age: 44 },
];
// DO NOT EDIT CODE ABOVE

const router = Router();

router.get("/", (req, res) => {
  res.json(people);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const arrayIndex = id - 1;

  res.json(people[arrayIndex]);
});

// DO NOT EDIT CODE BELOW
module.exports = router;
