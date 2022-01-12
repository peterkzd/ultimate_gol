export class World {
  display(): string {
    return "I am the world"
  }
}
export class Ruleset {}

class Game {
  world: World;
  ruleset: Ruleset;

  constructor(world: World, ruleset: Ruleset) {
    this.world = world;
    this.ruleset = ruleset;
  }

  display(): string {
    return this.world.display();
  }


}


export default Game;