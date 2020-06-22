const router = require("express").Router();

const dB = require("../database/dbConfig.js");

const db = require("./user-model.js");

//GETS all users and recipe info
router.get("/", (req, res) => {
  db.find()
    .then((user) => {
      res.status(201).json({ data: user });
    })
    .catch((err) => {
      res.status(401).json({ err });
    });
});

//GETs username by id and recipe info
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findBy(id)
    .then((user) => {
      res.status(201).json({ data: user });
    })
    .catch((err) => {
      res.status(400).json({ data: err });
    });
});

module.exports = router;
