exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("title", 128).notNullable();
      tbl.string("source", 128).notNullable();
      tbl.string("ingredients", 128).notNullable();
      tbl.string("instructions", 255).notNullable();
      tbl.string("category", 128).notNullable();
      tbl
        .integer("userId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("recipes").dropTableIfExists("users");
};
