import { Game } from "./types";
import {run} from "jest";

export function compute(game: Game): number {
  let score: number = 0;
  game.forEach((turn: Array<number>, index: number) => {
    if (index < 9){
      score += turn[0] + turn[1];
      if (isStrike(turn)){
        if (index+1 < 9)
          score += calculateScoreTurn(game[index+1]);
        if (index+2 < 9)
          score += calculateScoreTurn(game[index+2]);
      } else if(isSpare(turn) ) {
        score += game[index + 1][0];
      }
    } else if (index === 9) {
      score += turn[0] + turn[1] + turn[2];
      if (turn[0] === 10){
        score += turn[1] + turn[2]
      }
      if (turn[1] === 10){
        score += turn[2]
      } else {
        score += turn[2]
      }
    }
    console.log(`Score ${score} op index ${index}`)
  })

  return score;
}

function isSpare(turn: Array<number>): boolean {
  return (turn[0] + turn[1]) === 10;
}

function isStrike(turn: Array<number>): boolean {
  return turn[0] === 10 || turn[1] === 10;
}

function calculateScoreTurn(turn: Array<number>): number {
  if (turn.length === 3)
    return turn[0]+turn[1]+turn[2];
  else
    return turn[0]+turn[1];
}



