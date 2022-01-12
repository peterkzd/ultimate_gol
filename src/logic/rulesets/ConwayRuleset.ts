import Ruleset from "./Ruleset";

export class ConwayRuleset implements Ruleset {
  /* Implement the rules for Conway here
  Event             Current     Neighbours          Next
  Underpopulation:  alive,      <2 neighbours,      dead
  Next Gen:         alive,      2 or 3 neighbours,  alive
  Overpopulation:   alive,      >3 neighbours,      dead
  Reproduction:     dead,       ==3 neighbours,     alive
  */
  evolve(currentMatrix: number[][]): number[][] {
    const width = currentMatrix.length;
    const height = currentMatrix[0].length;


    let nextMatrix = currentMatrix;
    for (let i = 0; i < 10; i++){
      let rand_w = Math.floor(Math.random()*width);
      let rand_h = Math.floor(Math.random()*height);

      let new_val = Math.floor(Math.random()*2);

      nextMatrix[rand_w][rand_h] = new_val;
    }

    return nextMatrix;
  }
}

export default ConwayRuleset;