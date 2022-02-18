import Ruleset from "./Ruleset";
import CellLogic, { CellState } from "../CellLogic";
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
    return world.evolve((cell: CellLogic) => {
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
  }

}

export default ConwayRuleset;