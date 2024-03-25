import React from "react";

function GuessInput({ addNewGuess, gameOver }) {
  const [userInput, setUserInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(userInput);
        addNewGuess(userInput);
        setUserInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        title="5 letter word, letters only"
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value.toLocaleUpperCase());
        }}
        disabled={gameOver}
      />
    </form>
  );
}

export default GuessInput;
