export type Vector2D = {
  x: number;
  y: number;
}

export enum CellState {
  DEAD,
  ALIVE,
}

class CellLogic {
  position: Vector2D;
  state: CellState;

  constructor(position: Vector2D, state: CellState) {
    this.position = position;
    this.state = state;
  }
  get isAlive(): boolean {
    return this.state === CellState.ALIVE;
  }
  get isDead(): boolean {
    return this.state === CellState.DEAD;
  }

  get toString() {
    return this.state === CellState.ALIVE ? "1" : "0";
  }
}


export default CellLogic;