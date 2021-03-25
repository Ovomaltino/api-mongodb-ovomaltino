import IMoral from "./IMoral";


export default interface ISocialFact {
  name: string,
  moral: IMoral[],
  sanction_level: number
}