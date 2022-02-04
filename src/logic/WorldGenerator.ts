import { CellState} from "./CellLogic";

export class WorldGenerator {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get_initial_map(): CellState[][] {

    const x = CellState.DEAD;
    const o = CellState.ALIVE;

    return [
      [x, x, x, x, x, x, x, x, x, x],
      [x, x, x, x, x, x, x, x, x, x],
      [x, x, x, x, x, x, x, x, x, x],
      [x, x, x, o, o, x, x, x, x, x],
      [x, x, x, o, x, o, x, x, x, x],
      [x, x, x, x, o, x, x, x, x, x],
      [x, x, x, x, x, x, x, x, x, x],
      [x, x, x, x, x, x, x, x, x, x],
      [x, x, x, x, x, x, x, x, x, x],
      [x, x, x, x, x, x, x, x, x, x],
    ];
  }
}

export default WorldGenerator;