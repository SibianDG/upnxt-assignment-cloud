import { compute } from "../src/compute";
import { Game } from "../src/types";

it("should return 300 on a perfect game", () => {
  const input300: Game = [
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
  ];

  const score = compute(input300);

  expect(score).toBe(300);
});


it("should return 150 on a 5-5 game", () => {
  const input150: Game = [
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5, 5],
  ];

  const score = compute(input150);

  expect(score).toBe(150);
});

it("should return 90 on a 9 - game", () => {
  const input90: Game = [
    [9, 0],
    [9, 0],
    [9, 0],
    [9, 0],
    [9, 0],
    [9, 0],
    [9, 0],
    [9, 0],
    [9, 0],
    [9, 0, 0],
  ];

  const score = compute(input90);

  expect(score).toBe(90);
});

it("random game - score 170", () => {
  const input170: Game = [
    [8, 2],
    [7, 3],
    [3, 4],
    [10, 0],
    [2, 8],
    [10, 0],
    [10, 0],
    [8, 0],
    [10, 0],
    [8, 2, 9],
  ];

  const score = compute(input170);

  expect(score).toBe(170);
});