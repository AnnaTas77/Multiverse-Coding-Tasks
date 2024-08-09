const express = require("express");
const router = express.Router();
const users = [
  { name: "Rick", age: 72 },
  { name: "Morty", age: 14 },
  { name: "Jerry", age: 42 },
];
// Define middleware and routes here
// Write your code here
router.use(express.json());

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;

  users.push(newUser);

  res.send(users);
});

// DO NOT EDIT CODE BELOW
module.exports = router;
