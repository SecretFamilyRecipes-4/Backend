// const supertest = require("supertest");
// const server = require("../api/server.js");
// const db = require("../database/dbConfig.js");
//
// describe("GET / to recipes", () => {
//   beforeEach(async () => {
//     await supertest(server).post("/api/auth/register").send({
//       username: "login",
//       password: "test",
//     });
//   });

// it("should post a recipe", () => {
//   return supertest(server)
//     .post("/api/recipe/new")
//     .send({
//       username: "login",
//       title: "Cooking Boss",
//       source: "anything",
//       ingredients: "this is a new is",
//       instructions: "Whatever your heart feels is right",
//       category: "whatever you want",
//     })
//     .then((res) => {
//       console.log(res.body);
//       expect(res.body.title).toBe("Cooking Boss");
//     });
// });
// it("should get recipes list", () => {
//   return supertest(server)
//     .get("/api/recipe")
//     .then((res) => {
//       console.log(res.body);
//       expect(res.body).toBe("");
//   //     });
//   // });
// });
