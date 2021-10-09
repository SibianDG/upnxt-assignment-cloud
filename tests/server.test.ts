import request from "supertest";
import { app } from "../src/server";

it("has a compute endpoint that returns the score with status code 200", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ score: 300 });
});

it("Bad request: 9 entries in game gives error", async () => {
  const response = await request(app)
      .post("/compute")
      .send({
        game: [
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 10, 10],
        ],
      });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "Bad request" });
});

it("Bad request: score more than 10", async () => {
  const response = await request(app)
      .post("/compute")
      .send({
        game: [
          [12, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 10, 10],
        ],
      });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "Bad request" });
});

it("Bad request: sum more than 10", async () => {
  const response = await request(app)
      .post("/compute")
      .send({
        game: [
          [9, 7],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 10, 10],
        ],
      });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "Bad request" });
});

it("Bad request: 3 throw 10th turn invalid", async () => {
  const response = await request(app)
      .post("/compute")
      .send({
        game: [
          [9, 1],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [1, 2, 6],
        ],
      });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: "Bad request" });
});