import Ruleset from "./Ruleset";
import { CellState } from "../CellLogic";
import WorldLogic from "../WorldLogic";

export class ConwayRuleset implements Ruleset {
  /* Implement the rules for Conway here
  Event             Current     Neighbours          Next
  Underpopulation:  alive,      <2 neighbours,      dead
  Next Gen:         alive,      2 or 3 neighbours,  alive
  Overpopulation:   alive,      >3 neighbours,      dead
  Reproduction:     dead,       ==3 neighbours,     alive
  */
  evolve(world: WorldLogic): WorldLogic {
    return world.evolve((cell) => {
      const count = world.aliveNeighboursFor(cell).length;
      if (cell.isAlive && count < 2) {
        return CellState.DEAD;
      } else if (cell.isAlive && (count === 2 || count === 3)) {
        return CellState.ALIVE; // Nothing
      } else if (cell.isAlive && count > 3) {
        return CellState.DEAD;
      } else if (cell.isDead && count === 3) {
        return CellState.ALIVE;
      } else {
        return CellState.DEAD; // outside the map
      }
    })

    // const width = currentMatrix.length;
    // const height = currentMatrix[0].length;


    // let nextMatrix = currentMatrix;
    // for (let i = 0; i < 10; i++){
    //   let rand_w = Math.floor(Math.random()*width);
    //   let rand_h = Math.floor(Math.random()*height);

    //   let new_val = Math.floor(Math.random()*2);

    //   nextMatrix[rand_w][rand_h] = new_val;
    // }

  }

}

export default ConwayRuleset;