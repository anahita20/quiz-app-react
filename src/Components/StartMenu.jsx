import { useContext } from "react";
import { QuizContext } from "../App";

function StartMenu() {
  const { gameStatus, setGameStatus } = useContext(QuizContext);
  return (
    <div className="start-container">
      <button className="start-button" onClick={() => setGameStatus("quiz")}>
        <h2>Start Quiz</h2>
      </button>
    </div>
  );
}

export default StartMenu;
