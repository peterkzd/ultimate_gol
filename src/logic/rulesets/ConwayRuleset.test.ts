import ConwayRuleset from './ConwayRuleset';
import WorldLogic from '../WorldLogic';
import { CellState } from '../CellLogic';

const x = CellState.DEAD;
const o = CellState.ALIVE;

describe("ConwayRuleset", () => {
  describe("evolve()", () => {
    [
      {
        description: "one hopeless cell",
        initial: [
          [o, x]
        ],
        next: [
          [x, x]
        ]
      },
      {
        description: "when there are 2 adjacent alive cells on the board",
        initial: [
          [x, x, x],
          [x, o, o],
          [x, o, x],
          [x, x, x],
        ],
        next: [
          [x, x, x],
          [x, o, o],
          [x, o, o],
          [x, x, x],
        ]
      },
      {
        description: "It accounts for cells in the corners (ie: 8 neighbours)",
        initial: [
          [x, x, o],
          [x, o, x],
          [o, x, x],
          [x, x, x],
        ],
        next: [
          [x, x, x],
          [x, o, x],
          [x, x, x],
          [x, x, x],
        ]
      },
      {
        description: "Blinks",
        initial: [
          [x, x, x, x, x],
          [x, x, x, x, x],
          [x, o, o, o, x],
          [x, x, x, x, x],
          [x, x, x, x, x],
        ],
        next: [
          [x, x, x, x, x],
          [x, x, o, x, x],
          [x, x, o, x, x],
          [x, x, o, x, x],
          [x, x, x, x, x],
        ]
      },
      {
        description: "Still life",
        initial: [
          [x, x, x, x, x],
          [x, x, x, x, x],
          [x, x, o, o, x],
          [x, x, o, o, x],
          [x, x, x, x, x],
        ],
        next: [
          [x, x, x, x, x],
          [x, x, x, x, x],
          [x, x, o, o, x],
          [x, x, o, o, x],
          [x, x, x, x, x],
        ]
      },
      {
        description: "Beacon Oscillator",
        initial: [
          [o, o, x, x, x],
          [o, o, x, x, x],
          [x, x, o, o, x],
          [x, x, o, o, x],
          [x, x, x, x, x],
        ],
        next: [
          [o, o, x, x, x],
          [o, x, x, x, x],
          [x, x, x, o, x],
          [x, x, o, o, x],
          [x, x, x, x, x],
        ]
      },
    ].forEach((testCase) => {
      it(testCase.description, () => {
        const rules = new ConwayRuleset();
        const world = new WorldLogic(testCase.initial);
        const nextWorld = rules.evolve(world);

        expect(nextWorld.cellMatrix).toEqual(new WorldLogic(testCase.next).cellMatrix);
      })
    })
  })
})
