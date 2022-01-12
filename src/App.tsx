import React, { useState } from 'react';
import GameLogic from "./logic/GameLogic";
import WorldLogic from "./logic/WorldLogic";
import ConwayRuleset from "./logic/rulesets/ConwayRuleset";

import Game from "./ui/Game";


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
