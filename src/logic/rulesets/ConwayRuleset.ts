import Ruleset from "./Ruleset";

export class ConwayRuleset implements Ruleset {
  /* Implement the rules for Conway here
  Event             Current     Neighbours          Next
  Underpopulation:  alive,      <2 neighbours,      dead
  Next Gen:         alive,      2 or 3 neighbours,  alive
  Overpopulation:   alive,      >3 neighbours,      dead
  Reproduction:     dead,       ==3 neighbours,     alive
  */
  evolve(currentMatrix: string[][]): string[][] {
    return [['_', 'x', '_']];
  }
}

export default ConwayRuleset;