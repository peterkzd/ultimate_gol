import CellLogic, { CellState } from "./CellLogic";

type EvolutionLogic = (cell: CellLogic) => CellState

export class WorldLogic {
  cellMatrix: CellLogic[][];

  constructor(statusMatrix: CellState[][]) {
    this.cellMatrix = statusMatrix.map((cellsRow, rowIndex) =>
    cellsRow.map((status, columnIndex) =>
        new CellLogic(
          { x: columnIndex, y: rowIndex },
          status
        )))
  }

  evolve(evolutionLogic: EvolutionLogic): WorldLogic {
    // const nextMatrix = this.cellMatrix.map((cellsRow, rowIndex) =>
    //   cellsRow.map((oldCell, columnIndex) =>
    //     evolutionLogic(oldCell)));
    const nextMatrix = this.cellMatrix.map((cellsRow, rowIndex) => {
      return cellsRow.map((oldCell, columnIndex) => {
        const result = evolutionLogic(oldCell);
        if (result === CellState.ALIVE) {
          console.log(`>>>>>>>>>>>> ALIVE result`, result);
          console.log(`evolve oldCell.x, columnIndex, oldCell.y, rowIndex`, oldCell.position.x, columnIndex, oldCell.position.y, rowIndex);

        }
        return result;
      })
    });

    return new WorldLogic(nextMatrix);
  }

  cells(): CellLogic[] {
    return this.cellMatrix.flat();
  }

  // Returns the cells around the input cell that are ALIVE
  aliveNeighboursFor(cell: CellLogic): CellLogic[] {
    const neighbours: CellLogic[] = [];

    // // Top
    // const northWestCell = this.cellMatrix[cell.position.x-1]?.[cell.position.y-1];
    // const northCell     = this.cellMatrix[cell.position.x+0]?.[cell.position.y-1];
    // const northEastCell = this.cellMatrix[cell.position.x+1]?.[cell.position.y-1];

    // // Center
    // const westCell      = this.cellMatrix[cell.position.x-1]?.[cell.position.y+0];
    // const eastCell      = this.cellMatrix[cell.position.x+1]?.[cell.position.y+0];

    // // Bottom
    // const southWestCell = this.cellMatrix[cell.position.x-1]?.[cell.position.y+1];
    // const southCell     = this.cellMatrix[cell.position.x+0]?.[cell.position.y+1];
    // const southEastCell = this.cellMatrix[cell.position.x+1]?.[cell.position.y+1];

    // Top
    const northWestCell = this.cellMatrix[cell.position.y-1]?.[cell.position.x-1];
    const northCell     = this.cellMatrix[cell.position.y+0]?.[cell.position.x-1];
    const northEastCell = this.cellMatrix[cell.position.y+1]?.[cell.position.x-1];

    // Center
    const westCell      = this.cellMatrix[cell.position.y-1]?.[cell.position.x+0];
    const eastCell      = this.cellMatrix[cell.position.y+1]?.[cell.position.x+0];

    // Bottom
    const southWestCell = this.cellMatrix[cell.position.y-1]?.[cell.position.x+1];
    const southCell     = this.cellMatrix[cell.position.y+0]?.[cell.position.x+1];
    const southEastCell = this.cellMatrix[cell.position.y+1]?.[cell.position.x+1];

    const aliveNeighbours = [northCell,
      eastCell,
      southCell,
      westCell,
      northEastCell,
      southEastCell,
      southWestCell,
      northWestCell].filter((cell) => cell?.isAlive)

    // console.log(aliveNeighbours);
    // return neighbours;
    return aliveNeighbours;
  }
  // updateMatrix(newMatrix: string[][]): string[][] {
  //   this.statusMatrix = newMatrix;
  //   return [['x'], ['x']];
  // }


}

export default WorldLogic;
