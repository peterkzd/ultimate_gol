export interface Ruleset {
  evolve(currentMatrix: string[][]): string[][]; 
}

export default Ruleset;