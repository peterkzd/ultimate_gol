export class WorldGenerator {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get_initial_map(): string[][] {
    return [
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', 'x', '_', '_', '_', '_', '_'],
      ['_', '_', '_', 'x', 'x', 'x', '_', '_', '_', '_'],
      ['_', '_', '_', '_', 'x', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ] 
  }
}

export default WorldGenerator;