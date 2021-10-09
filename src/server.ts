import http from "http";
import express from "express";
import { compute } from "./compute";
import {Game} from "./types";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const gameRequest = request.body.game;
  let valid: boolean = true;

  try {
    checkInput(gameRequest);
  } catch (error) {
    response.status(400)
    response.send({"error": error.message});
    valid = false;
  }

  if (valid) {
    const score = compute(gameRequest);
    response.status(200)
    response.send({"score": score});
  }
});

function checkInput(inputGame: any): void {
    const game: Game = inputGame as Game;
    if (game.length !== 10)
      throw new Error('Bad request')
    inputGame.forEach((e: Array<number>, i: number) => {
      if (i < 9) {
        if (e.length !== 2)
          throw new Error('Bad request');
        if (e[0] === 10 &&e[1] > 0)
          throw new Error('Bad request');
      } else if (i === 9){
        if (e.length < 2 || e.length > 3)
          throw new Error('Bad request');
        if (e[0]+e[1] < 10 && e[2] !== 0)
          throw new Error('Bad request');
      } else {
        throw new Error('Bad request');
      }
      checkScore(e);
    })
}

function checkScore(turn: Array<number>): void {
  turn.forEach(e => {
    if (e > 10)
      throw new Error('Bad request');
  })
  const score: number = turn.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
  if((score > 10 && turn.length === 2) || (score > 30 && turn.length === 3))
    throw new Error('Bad request');
}