import React from "react";

function ResultBanner({ gameWon, guessCount, answer }) {
  let banner;

  if (gameWon) {
    banner = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessCount} guesses</strong>.
        </p>
      </div>
    );
  } else {
    banner = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
  return banner;
}

export default ResultBanner;
