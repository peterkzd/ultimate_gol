import { reduceEachTrailingCommentRange } from "typescript";

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

  get toString(): string {
    return this.state === CellState.ALIVE ? "1" : "0";
  }

  toggleState(): void {
    this.state = this.isAlive ? CellState.DEAD : CellState.ALIVE;
  }
}


export default CellLogic;