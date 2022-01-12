import React, { useState } from 'react';
import GameLogic, {WorldLogic, Ruleset} from "./logic/GameLogic";


interface GameProps {
  logic: GameLogic;
}
const Game: React.FC<GameProps> = ({ logic }) => {

  const [generation, setGeneration] = useState(logic.generation);

  const nextGeneration = () => {
    setGeneration(logic.nextState());
  }
  return (<div>
    <h1>The Ultimate Game of Life</h1>
    {logic.display()}
    <button onClick={nextGeneration}>Next</button>
  </div>)
}


function App() {
  const world = new WorldLogic();
  const ruleset = new Ruleset();
  const game = new GameLogic(world, ruleset);

  return (
    <div>
      <Game logic={game} />
    </div>
  );
}

export default App;
