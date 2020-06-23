const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

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

server.get("/", (req, res) => {
  res.status(201).json({ api: "Lets add some secret recipes!" });
});

module.exports = server;
