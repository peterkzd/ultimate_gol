export class WorldGenerator {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get_initial_map(): number[][] {
    let arr = new Array(this.width);
    for (var i = 0; i < this.width; i++){
      arr[i] = new Array(this.height);
      arr[i].fill(0);
    }

    return arr;

    // return [
    //   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', 'x', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', 'x', 'x', 'x', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', 'x', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    //   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    // ] 
  }
}

export default WorldGenerator;