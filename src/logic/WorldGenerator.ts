import { CellState} from "./CellLogic";

export class WorldGenerator {
  width: number;
  height: number;

  constructor(/*width: number, height: number*/) {
    this.width = 50;
    this.height = 50;
  }

  get_initial_map(): CellState[][] {

    const mapArray = new Array();
    for (let i = 0; i < this.height; i++){
      mapArray[i] = new Array();
      for (let j = 0; j < this.width; j++){
        mapArray[i][j] = CellState.DEAD;
      }
    }

    return mapArray;
    // const x = CellState.DEAD;
    // const o = CellState.ALIVE;

    // return [
    //   [x, x, x, x, x, x, x, x, x, x],
    //   [x, x, x, x, x, x, x, x, x, x],
    //   [x, x, x, x, x, x, x, x, x, x],
    //   [x, x, x, x, x, x, x, x, x, x],
    //   [x, x, x, x, o, x, x, x, x, x],
    //   [x, x, x, x, o, x, x, x, x, x],
    //   [x, x, x, x, o, x, x, x, x, x],
    //   [x, x, x, x, x, x, x, x, x, x],
    //   [x, x, x, x, x, x, x, x, x, x],
    //   [x, x, x, x, x, x, x, x, x, x],
    // ];
  }
}

export default WorldGenerator;