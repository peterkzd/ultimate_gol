import React, { useState } from 'react';

// Import all the logic
import GameLogic from "./logic/GameLogic";
import WorldLogic from "./logic/WorldLogic";
import ConwayRuleset from "./logic/rulesets/ConwayRuleset";
import WorldGenerator from "./logic/WorldGenerator";

// Import the UI
import Game from "./ui/Game";

function App() {
  const world = new WorldLogic(new WorldGenerator().get_initial_map());
  const ruleset = new ConwayRuleset();
  const game = new GameLogic(world, ruleset);

  return (
    <div>
      <Game gameLogic={game} />
    </div>
  );
}

export default App;
