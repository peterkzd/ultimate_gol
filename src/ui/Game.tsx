import React, { useState } from "react";
import GameLogic from "../logic/GameLogic";
import World from "./World";

interface GameProps {
  gameLogic: GameLogic;
}
const Game: React.FC<GameProps> = ({ gameLogic }) => {

  const [generation, setGeneration] = useState(gameLogic.generation);

  const nextGeneration = () => {
    setGeneration(gameLogic.nextState());
  }
  return (
  <div>
    <h1>The Ultimate Game of Life</h1>
    {/* {logic.display()} */}
    <p>Generation: {generation}</p>
    <World worldLogic={gameLogic.world} />
    <button onClick={nextGeneration}>Next</button>
  </div>
  )
}

export default Game;