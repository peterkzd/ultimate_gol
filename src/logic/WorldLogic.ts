export class WorldLogic {
  statusMatrix: number[][];
  nextStatusMatrix: number[][];
  constructor(statusMatrix: number[][]) {
    this.statusMatrix = statusMatrix;
    this.nextStatusMatrix = statusMatrix;
  }

  // updateMatrix(newMatrix: string[][]): string[][] {
  //   this.statusMatrix = newMatrix;
  //   return [['x'], ['x']];
  // }
}

export default WorldLogic;
