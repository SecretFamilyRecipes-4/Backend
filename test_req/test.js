const router = require("express").Router();
const db = require("../database/dbConfig.js");

router.post("/new", (req, res) => {
  const body = req.body;

  if (body) {
    db("test")
      .insert(body, "id")
      .then((e) => {
        res.json({ id: e, body });
      })
      .catch((err) => {
        res.json({ message: "not valid" });
      });
  } else {
    res.json("error");
  }
});

router.get("/names", (req, res) => {
  db("test")
    .select("name", "age")
    .then((e) => {
      res.json(e);
    })
    .catch((err) => {
      res.json({ message: "no data" });
    });
});

router.put("/put/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  db("test")
    .update(req.body)
    .where("id", id)
    .then((e) => {
      res.json({ data: e, body });
    })
    .catch((err) => {
      res.json({ message: "try again" });
    });
});

module.exports = router;
