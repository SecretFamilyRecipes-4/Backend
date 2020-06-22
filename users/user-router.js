const router = require("express").Router();

const dB = require("../database/dbConfig.js");

const db = require("./user-model.js");

router.get("/", (req, res) => {
  db.find()
    .then((user) => {
      res.status(201).json({ data: user });
    })
    .catch((err) => {
      res.status(401).json({ err });
    });
});

module.exports = router;
