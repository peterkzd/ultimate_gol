import WorldLogic from "./WorldLogic";
import Ruleset from "./rulesets/Ruleset";

class GameLogic {
  world: WorldLogic;
  ruleset: Ruleset;
  generation: number;

  constructor(world: WorldLogic, ruleset: Ruleset) {
    this.world = world;
    this.ruleset = ruleset;
    this.generation = 0;
  }

  nextState(): number {
    this.world.statusMatrix = this.ruleset.evolve(this.world.statusMatrix);
    return this.generation += 1;
  }
}

export default GameLogic;