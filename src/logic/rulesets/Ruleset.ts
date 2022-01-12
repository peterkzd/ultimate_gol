export interface Ruleset {
  evolve(currentMatrix: number[][]): number[][]; 
}

export default Ruleset;