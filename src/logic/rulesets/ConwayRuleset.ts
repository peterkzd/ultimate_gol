import Ruleset from "./Ruleset";

export class ConwayRuleset implements Ruleset {
  // Implement the rules for Conway here
  evolve(currentMatrix: string[][]): string[][] {
    return [['_', 'x', '_']];
  }
}

export default ConwayRuleset;