import React, { useState } from 'react';
import GameLogic, {WorldLogic, Ruleset} from "./logic/GameLogic";

const cellStatusMatrix = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

interface WorldProps {
  logic: WorldLogic;
}

const World: React.FC<WorldProps> = ({ logic }) => {
  return (
    <>
      {logic.statusMatrix}
    </>
  )
}

interface GameProps {
  logic: GameLogic;
}
const Game: React.FC<GameProps> = ({ logic }) => {

  const [generation, setGeneration] = useState(logic.generation);

  const nextGeneration = () => {
    setGeneration(logic.nextState());
  }
  return (
  <div>
    <h1>The Ultimate Game of Life</h1>
    {/* {logic.display()} */}
    <p>Generation: {generation}</p>
    <World logic={logic.world} />
    <button onClick={nextGeneration}>Next</button>
  </div>
  )
}


function App() {
  const world = new WorldLogic(cellStatusMatrix);
  const ruleset = new Ruleset();
  const game = new GameLogic(world, ruleset);

  return (
    <div>
      <Game logic={game} />
    </div>
  );
}

export default App;
