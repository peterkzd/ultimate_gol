import CellLogic, { CellState } from "./CellLogic";

type EvolutionLogic = (cell: CellLogic) => CellState

export class WorldLogic {
  // statusMatrix: number[][];
  cellMatrix: CellLogic[][];

  constructor(statusMatrix: CellState[][]) {
    this.cellMatrix = statusMatrix.map((statusRow, rowIndex) =>
      statusRow.map((status, columnIndex) =>
        new CellLogic(
          { x: columnIndex, y: rowIndex },
          status
        )))
  }

  evolve(evolutionLogic: EvolutionLogic): WorldLogic {
    const nextMatrix = this.cellMatrix.map((cellsRow, rowIndex) =>
      cellsRow.map((oldCell, columnIndex) =>
        evolutionLogic(oldCell)));
    return new WorldLogic(nextMatrix);
  }

  cells(): CellLogic[] {
    return this.cellMatrix.flat();
  }

  // Returns the cells around the input cell that are ALIVE
  aliveNeighboursFor(cell: CellLogic): CellLogic[] {

    const neighbours: CellLogic[] = [];

    // Loop through four directions -> NESW
    const northCell = this.cellMatrix[cell.position.x]?.[cell.position.y-1];
    const eastCell = this.cellMatrix[cell.position.x+1]?.[cell.position.y];
    const southCell = this.cellMatrix[cell.position.x]?.[cell.position.y+1];
    const westCell = this.cellMatrix[cell.position.x-1]?.[cell.position.y];

    if (northCell !== undefined && northCell.state === CellState.ALIVE) {
      neighbours.push(northCell);
    }
    if (eastCell !== undefined && eastCell.state === CellState.ALIVE) {
      neighbours.push(eastCell);
    }
    if (southCell !== undefined && southCell.state === CellState.ALIVE) {
      neighbours.push(southCell);
    }
    if (westCell !== undefined && westCell.state === CellState.ALIVE) {
      neighbours.push(westCell);
    }

    return neighbours;
  }
  // updateMatrix(newMatrix: string[][]): string[][] {
  //   this.statusMatrix = newMatrix;
  //   return [['x'], ['x']];
  // }


}

export default WorldLogic;
