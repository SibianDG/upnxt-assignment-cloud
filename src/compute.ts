import { Game } from "./types";
import {run} from "jest";

export function compute(game: Game): number {
  let score: number = 0;

  game.forEach((turn: Array<number>, index: number) => {
    if (index < 9){
      score += calculateScoreTurn(turn);
      if (isStrike(turn)){
        if (game[index+1][0] === 10){
          score += 10;
          if (index+2 > 9)
            score += game[index+1][1];
          else
            score += game[index+2][0];
         } else {
          if (index+1 === 9)
            score += game[index+1][0] + game[index+1][1];
          else
            score += calculateScoreTurn(game[index+1]);
        }
      } else if(isSpare(turn) )
        score += game[index + 1][0];
    } else if (index === 9) {
      score += calculateScoreTurn(turn);
    }
    //console.log(`Score ${score} op index ${index}`);
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
  return turn.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
}



