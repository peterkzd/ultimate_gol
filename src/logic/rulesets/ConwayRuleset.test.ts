import ConwayRuleset from './ConwayRuleset';
import WorldLogic from '../WorldLogic';
import { CellState } from '../CellLogic';

const x = CellState.DEAD;
const o = CellState.ALIVE;

describe("ConwayRuleset", () => {
  describe("evolve()", () => {
    describe("when there are 2 adjacent alive cells on the board", () => {
      it("stays alive", () => {
        const rules = new ConwayRuleset();
    
        const initState = [
          [x, x, x],
          [x, o, o],
          [x, o, x],
          [x, x, x],
        ];

        const expectedState = [
          [x, x, x],
          [x, o, x],
          [x, x, x],
          [x, x, x],
        ];

        const world = new WorldLogic(initState);

        const nextWorld = rules.evolve(world);

        expect(nextWorld.cellMatrix).toEqual(new WorldLogic(expectedState).cellMatrix);
      })
    })
  })
})


