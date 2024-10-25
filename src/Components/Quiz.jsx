import { useContext, useState, useEffect } from "react";
import { QuizContext } from "../App";
import quizData from "../Data/QuizQuestions.json";

function Quiz() {
  const { gameStatus, setGameStatus, score, setScore } =
    useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);

  function handleEndGame() {
    setGameStatus("end");
  }

  function updateScore(e) {
    if (e.target.value === quizData[currQuestion].answer) {
      setScore((s) => s + 1);
    }
    setCurrQuestion((c) => c + 1);
  }

  return (
    <div>
      {quizData[currQuestion] ? (
        <div className="quiz-container">
          <p className="question-container">
            {quizData[currQuestion].question}
          </p>
          {quizData[currQuestion].options.map((option, index) => (
            <button
              className="button-option"
              onClick={updateScore}
              key={index}
              value={option}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        handleEndGame()
      )}
    </div>
  );
}

export default Quiz;
