import { useState, createContext } from "react";
import Quiz from "./Components/Quiz";
import QuizEnd from "./Components/QuizEnd";
import StartMenu from "./Components/StartMenu";
import "./styles.css";

export const QuizContext = createContext();

export default function App() {
  const [gameStatus, setGameStatus] = useState("start");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <QuizContext.Provider
        value={{ gameStatus, setGameStatus, score, setScore }}
      >
        {gameStatus === "start" && <StartMenu />}
        {gameStatus === "quiz" && <Quiz />}
        {gameStatus === "end" && <QuizEnd />}
      </QuizContext.Provider>
    </div>
  );
}
