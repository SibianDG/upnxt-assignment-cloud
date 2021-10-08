import http from "http";
import express from "express";
import { compute } from "./compute";
import {Game} from "./types";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const gameRequest = request.body.game;
  let game: Game;
  try {
    game = gameRequest;
    if (game.length !== 10)
      throw new Error('Bad request')
    gameRequest.forEach((e: Array<number>, i: number) => {
      console.log(e + " --- " + i)
      if (i < 9) {
        if (e.length !== 2)
          throw new Error('Bad request')
      } else if (i === 9){
        if (e.length < 2 || e.length > 3)
          throw new Error('Bad request')
      } else {
        throw new Error('Bad request')
      }
    })
  } catch (error) {
    response.status(400)
    response.send(error.message);
  }

  const score = compute(game);
  response.status(200)
  response.send({"score": score});
});
