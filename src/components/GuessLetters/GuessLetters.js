import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessLetters({ guess, answer }) {
  let validGuess = guess ? true : false;
  let guessCorrections = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span
            className={
              guessCorrections && validGuess
                ? "cell " + guessCorrections[index].status
                : "cell"
            }
            key={index}
          >
            {validGuess ? guess[index] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default GuessLetters;
