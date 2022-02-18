import WorldLogic from "./WorldLogic";
import WorldGenerator from "./WorldGenerator";
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

  reset() {
    this.world = new WorldLogic(new WorldGenerator(10, 10).get_initial_map());
    this.generation = 0;
  }

  nextState(): number {
    this.world = this.ruleset.evolve(this.world);
    return this.generation += 1;
  }
}

export default GameLogic;