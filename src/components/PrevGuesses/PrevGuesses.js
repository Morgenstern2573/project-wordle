import React from "react";

import GuessLetters from "../GuessLetters/GuessLetters";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { range } from "../../utils";

function PrevGuesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <GuessLetters
            guess={guesses[num]}
            answer={answer}
            key={num}
          ></GuessLetters>
        );
      })}
    </div>
  );
}

export default PrevGuesses;
