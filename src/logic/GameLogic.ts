import internal from "stream";

export class WorldLogic {
  statusMatrix: string[][];
  constructor(statusMatrix: string[][]) {
    this.statusMatrix = statusMatrix;
  }
  // display(): string {
  //   return "I am the world"
  // }
}
export class Ruleset {}

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
    return this.generation += 1;
  }

  // display(): string {
  //   return `${this.generation}: ${this.world.display()}`;
  // }


}


export default GameLogic;