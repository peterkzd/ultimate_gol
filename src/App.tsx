import React, { useState } from 'react';
import GameLogic, {WorldLogic, Ruleset, ConwayRuleset} from "./logic/GameLogic";

const cellStatusMatrix = [
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', 'x', '_', '_', '_', '_', '_'],
  ['_', '_', '_', 'x', 'x', 'x', '_', '_', '_', '_'],
  ['_', '_', '_', '_', 'x', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
]

interface WorldProps {
  worldLogic: WorldLogic;
}

const World: React.FC<WorldProps> = ({ worldLogic }) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        {worldLogic.statusMatrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => <td key={`${rowIndex}-${columnIndex}`}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

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


function App() {
  const world = new WorldLogic(cellStatusMatrix);
  const ruleset = new ConwayRuleset();
  const game = new GameLogic(world, ruleset);

  return (
    <div>
      <Game gameLogic={game} />
    </div>
  );
}

export default App;
