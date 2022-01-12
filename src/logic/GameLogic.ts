import internal from "stream";

export class WorldLogic {
  statusMatrix: string[][];
  nextStatusMatrix: string[][];
  constructor(statusMatrix: string[][]) {
    this.statusMatrix = statusMatrix;
    this.nextStatusMatrix = statusMatrix;
  }

  // updateMatrix(newMatrix: string[][]): string[][] {
  //   this.statusMatrix = newMatrix;
  //   return [['x'], ['x']];
  // }

  
  // display(): string {
  //   return "I am the world"
  // }
}
export interface Ruleset {
  evolve (currentMatrix: string[][]): string[][]; 
}

export class ConwayRuleset implements Ruleset {
  // Implement the rules for Conway here
  evolve(currentMatrix: string[][]): string[][] {
    return [['x']];
  }
}

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

  // display(): string {
  //   return `${this.generation}: ${this.world.display()}`;
  // }


}


export default GameLogic;