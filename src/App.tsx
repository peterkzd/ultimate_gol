import React from 'react';
import Game, {World, Ruleset} from "./logic/Game";

function App() {
  const world = new World();
  const ruleset = new Ruleset();
  const game = new Game(world, ruleset);
  return (
    <div>
      {game.display()}
    </div>
  );
}

export default App;
