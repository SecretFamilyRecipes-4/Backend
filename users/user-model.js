const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findBy,
};

function find() {
  return db("users as u")
    .join("recipes as r", "r.id", "u.id")
    .select(
      "u.id",
      "u.username",
      "r.title",
      "r.source",
      "r.ingredients",
      "r.instructions",
      "r.category"
    )
    .orderBy("u.id");
}

function findBy(id) {
  return db("users as u")
    .join("recipes as r")
    .select(
      "u.id",
      "u.username",
      "r.title",
      "r.source",
      "r.ingredients",
      "r.instructions",
      "r.category"
    )
    .where("u.id", id)
    .first();
}
