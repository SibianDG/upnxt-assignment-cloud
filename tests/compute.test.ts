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