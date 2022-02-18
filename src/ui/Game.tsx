import React, { useState } from "react";
import GameLogic from "../logic/GameLogic";
import World from "./World";

import "./Game.css";

var interval: any;

interface GameProps {
  gameLogic: GameLogic;
}
const Game: React.FC<GameProps> = ({ gameLogic }) => {

  const [generation, setGeneration] = useState(gameLogic.generation);
  const [timeStep, setTimeStep] = useState(1000);
  const [play, setPlay] = useState(false);

  const nextGeneration = () => {
    setGeneration(gameLogic.nextState());
  }

  const togglePlay = () => {
    setPlay((play) => !play)
  }

  const reset = () => {
    gameLogic.reset();
    setGeneration(gameLogic.generation);
  }

  const setTimeInterval = (event: { target: { value: string; }; }) => {
    const val = parseInt(event.target.value, 10);
    if (!isNaN(val)){
      setTimeStep(val);
    }
  }
  
  React.useEffect(() => {
    if (interval) { clearInterval(interval) }
    interval = setInterval(() => {
      if (play) {
        setGeneration(gameLogic.nextState());
      }
    }, timeStep);
    return () => clearInterval(interval);
  }, [play]);

  return (
  <section className="container">
    <aside className="sidebar">
      <button onClick={togglePlay}>{play ? "Stop" : "Start"}</button>
      <button onClick={nextGeneration} disabled={play}>Next Step</button>
      <button onClick={reset} disabled={play}>Reset</button>
      <div>
        <label htmlFor="timeIntervalInput">Time Interval:</label>
        <input type="text" id="timeIntervalInput" value={timeStep} onChange={setTimeInterval} disabled={play}>
        </input>
      </div>
    </aside>
    <header className="header">
        <h1>The Ultimate Game of Life</h1>
        <p>Generation: {generation}</p>
      </header>
    <main className="main">
      <World worldLogic={gameLogic.world} />
    </main>
  </section>
  )
}

export default Game;