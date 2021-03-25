import ISocialFact from "@entities/ISocialFact";



export default interface ISocialFactRepository {
  getSocialFact(
    filters:string | undefined, 
    fields: string | undefined, 
    sort: string | undefined, 
    offset: string | undefined, 
    limit: string | undefined): Promise<ISocialFact[] | null>
  createSocialFact(data: ISocialFact[]): Promise<ISocialFact[]>
  updateSocialFact(id: string, data: ISocialFact): Promise<ISocialFact | null>
  deleteSocialFact(id: string): Promise<ISocialFact | null>
}
