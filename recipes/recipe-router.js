const router = require("express").Router();
const db = require("./recipe-model.js");

//POST new recipe
router.post("/new", (req, res) => {
  const body = req.body;
  db.add(body)
    .then((change) => {
      res.status(201).json({ id: change, body });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ data: "please provide all the required fields", err });
    });
});

//GETS all recipes
router.get("/", (req, res) => {
  db.find()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "invalid request", err });
    });
});

//GETS recipe by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findBy(id)
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch((err) => {
      res.status(400).json({ message: "invalid ID", err });
    });
});

//PUT recipe by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  db.update(body)
    .then((change) => {
      res.status(200).json({ data: change, body });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "not a valid change, please try again", err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then((change) => {
      res.status(200).json({ message: "succeful deletion", change });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
