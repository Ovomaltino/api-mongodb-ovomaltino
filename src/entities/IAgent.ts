import IMemory from "./IMemory";
import ISanction from "./ISanctions";

export default interface IAgent {
  birth: Date,
  progenitor: string,
  leader: boolean,
  becomeLeader?: Date,
  death?: Date,
  life: number,
  memory: IMemory[],
  sanctions: ISanction[],
  actions: number
}