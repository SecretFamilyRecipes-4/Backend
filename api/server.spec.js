const supertest = require("supertest");

const server = require("./server.js");

const db = require("../database/dbConfig.js");

describe("server.js", () => {
  // beforeEach(async () => {
  //   await db("users").truncate();
  // });
  describe("GET /", () => {
    it("should return status code of 201", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
    it("should respond with the api welcome message", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("Lets add some secret recipes!");
        });
    });
  });
});
