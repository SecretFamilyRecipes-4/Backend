const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("../database/dbConfig.js");

const authenticate = require("../auth/auth-middleware.js");
const authRouter = require("../auth/auth-router.js");
const userRouter = require("../users/user-router.js");
const recipeRouter = require("../recipes/recipe-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", authenticate, userRouter);
server.use("/api/recipe", authenticate, recipeRouter);

//INIT GET request
server.get("/", (req, res) => {
  res.status(201).json({ api: "Lets add some secret recipes!" });
});

//TEST GET request
server.get("/api/test", function (req, res) {
  db("users")
    .select("users.username")
    .then((name) => {
      res.json({ data: name });
    });
});

const name = db("recipes.title");

server.get(`/api/${name}`, function (req, res) {
  db("recipes")
    .select(name)
    .then((rec) => res.json({ data: rec }));
});

module.exports = server;
