exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          title: "Cooking Boss",
          source: "anything",
          ingredients: "only the finest",
          instructions: "Whatever your heart feels is right",
          category: "whatever you want",
          userId: 1,
        },
        {
          title: "Professional Cook",
          source: "local store",
          ingredients: "fresh greens",
          instructions: "Whatever your heart feels is right",
          category: "tv cooking",
          userId: 2,
        },
        {
          title: "Critically sounds",
          source: "fish markets",
          ingredients: "lemon, salt and pepper",
          instructions: "Whatever your heart feels is right",
          category: "Seafood",
          userId: 3,
        },
        {
          title: "Cooking Boss",
          source: "anything else ",
          ingredients: "only the finest and some",
          instructions: "Whatever your heart feels is right",
          category: "whatever you want or can dream",
          userId: 1,
        },
      ]);
    });
};
