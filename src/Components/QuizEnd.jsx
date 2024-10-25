import { useContext, useState, useEffect } from "react";
import { QuizContext } from "../App";
function QuizEnd() {
  const { gameStatus, setGameStatus, score, setScore } =
    useContext(QuizContext);
  return (
    <div>
      <p>Quiz Completed</p>
      <p>You scored {score}</p>
    </div>
  );
}

export default QuizEnd;
