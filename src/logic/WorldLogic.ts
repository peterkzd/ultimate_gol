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
}

export default WorldLogic;
