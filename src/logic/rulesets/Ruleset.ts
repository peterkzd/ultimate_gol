import WorldLogic from "../WorldLogic";

export interface Ruleset {
  evolve(world: WorldLogic): WorldLogic; 
}

export default Ruleset;