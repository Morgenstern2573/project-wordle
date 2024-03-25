import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import PrevGuesses from "../PrevGuesses";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [prevGuessesList, setPrevGuessesList] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);

  function addGuessToList(newGuess) {
    if (prevGuessesList.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const guessResults = checkGuess(newGuess, answer);
    const wrongLetters = guessResults.filter((result) => {
      return result.status != "correct";
    });

    if (wrongLetters.length === 0) {
      setGameWon(true);
      setGameOver(true);
    }

    const newList = [...prevGuessesList, newGuess];
    if (!gameOver && newList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }

    setPrevGuessesList(newList);
  }

  return (
    <>
      {gameOver && (
        <ResultBanner
          gameWon={gameWon}
          guessCount={prevGuessesList.length}
          answer={answer}
        ></ResultBanner>
      )}
      <PrevGuesses guesses={prevGuessesList} answer={answer}></PrevGuesses>
      <GuessInput addNewGuess={addGuessToList} gameOver={gameOver}></GuessInput>
    </>
  );
}

export default Game;
