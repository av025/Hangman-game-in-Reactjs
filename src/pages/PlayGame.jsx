import { Link, useLocation } from "react-router-dom";
import Hangman from "../components/Hangman/Hangman";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import MaskedText from "../components/MaskedText/MaskedText";
import { useState } from "react";

function PlayGame() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  const location = useLocation();
  const { state } = location;

  function handleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
    } else {
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  const isGameWon = [...new Set(state.wordSelected.toUpperCase())].every(
  (letter) => guessedLetters.includes(letter)
);


  if (step >= 8) {
    return (
      <>
        <h2 className="text-4xl m-4 text-orange-600 text-center">
          {" "}
          You Hang the man
        </h2>
        <div className="text-center">
          <Link to="/" className="text-blue-500 m-2 ">
            Navigate to Start Game
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="text-4xl m-4 text-orange-600">Play Game</h1>
      <h2 className="text-2xl m-4">{state.wordHint}</h2>
      <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
      <div>
        <Hangman steps={step} />
      </div>
      <div>
        <Link to="/" className="text-blue-500 m-2 text-center">
          Navigate to Start Game
        </Link>
      </div>

      {isGameWon && (
          <h2 className="text-4xl m-4 text-green-600 text-center">
      🎉 You guessed the word correctly!
    </h2>
    

)}

     
    </>
  );
}

export default PlayGame;
