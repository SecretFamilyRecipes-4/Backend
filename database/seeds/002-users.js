exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Betty Crocker", password: "cooking" },
        { username: "Rachel Ray", password: "cooking" },
        { username: "Gordon Ramsay", password: "cooking" },
      ]);
    });
};
