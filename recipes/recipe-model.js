const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  update,
  remove,
};

function add(recipe) {
  return db("recipes").insert(recipe, "id").orderBy("id");
}

function find() {
  return db("recipes").select("*");
}

function findBy(id) {
  return db("recipes").where({ id }).first();
}

function update(recipe) {
  return db("recipes").update(recipe);
}

function remove(id) {
  return db("recipes").where({ id }).del();
}
