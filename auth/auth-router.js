const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./auth-model.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the auth router" });
});

router.post("/register", (req, res) => {
  db.add(req.body)
    .then((data) => {
      res.status(201).json({ id: data, ...req.body });
    })
    .catch((err) => {
      res.status(401).json({ err });
    });
});

router.post("/login", (req, res) => {
  return null;
});
module.exports = router;
