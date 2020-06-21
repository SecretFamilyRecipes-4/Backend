const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const test = require("../test_req/test.js");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/", test);

server.get("/", (req, res) => {
  res.status(201).json({ api: "Lets Add Some Secret Recipes" });
});

module.exports = server;
