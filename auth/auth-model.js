const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  login,
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

function login(username) {
  return db("users as u")
    .select("u.id", "u.username", "u.password")
    .where({ username: username })
    .orderBy("id");
}
