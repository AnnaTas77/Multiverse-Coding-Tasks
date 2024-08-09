const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const restaurantData = [
  { name: "Bobs Burgers", location: "New York City" },
  { name: "Harry's Fish Shack", location: "London" },
  { name: "Elizabeth's Hot Dogs", location: "Chicago" },
];
// DO NOT EDIT CODE ABOVE

router.use(express.json());

router.get("/", (req, res) => {
  res.json(restaurantData);
});

router.post("/", [check("name").not().isEmpty().trim()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ error: errors.array() });
  } else {
    restaurantData.push(req.body);
    res.json(restaurantData);
  }
});
// DO NOT EDIT CODE BELOW
module.exports = router;
