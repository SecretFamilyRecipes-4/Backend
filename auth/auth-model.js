const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  // findById,
};

function find() {
  return db("users").select("id", "username").orderBy("username");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function add(user) {
  return db("users").insert(user, "id");
}
