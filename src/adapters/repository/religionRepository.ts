import ISocialFact from "@entities/ISocialFact"
import ReligionDB from "@external/database/entities/religion"
import ISocialFactRepository from "@useCases/iSocialFactRepository"


export default class ReligionRepository implements ISocialFactRepository {
  /**
   * Get All SocialFacts in the database
   * @example getAllSocialFact()
   * @returns {Promise<ISocialFact[] | null>} ISocialFact[] | null
   */
  async getSocialFact(
    filters:string | undefined, 
    fields: string | undefined, 
    sort: string | undefined, 
    offset: string | undefined, 
    limit: string| undefined): Promise<ISocialFact[] | null> {

      let fieldsString = ''
      if (fields != undefined) {
        fields.split(',').forEach((field: string) => {
          fieldsString += ` ${field}`
        })
      } 

      let sortList = new Array
      if (sort != undefined) {
        sort.split(':').forEach((field: string) => {
          if (field == 'asc') {
            sortList.push(1)
          } else if (field == 'desc') {
            sortList.push(-1)
          } else {
            sortList.push(field)
          }
        })
      }

      const ret: ISocialFact[] | null = await ReligionDB.find(
        filters != undefined ? JSON.parse(filters) : {},
        fieldsString
      )
      .sort([sortList])
      .skip(offset != undefined ? +offset : +'')
      .limit(limit != undefined ? +limit : +'')

      return ret
  }

  /**
   * save a new SocialFact in the database
   * @param {ISocialFact[]} data ISocialFact[]
   * @example createSocialFact(ISocialFact[] "without id" )
   * @returns {Promise<ISocialFact[]>} ISocialFact[] with id
   */
  async createSocialFact(data: ISocialFact[]): Promise<ISocialFact[]> {
    const ret: ISocialFact[] = await ReligionDB.create(data)
    return ret
  }

  /**
   * update a saved SocialFact in the database
   * @param {string} id ObjectId
   * @param {ISocialFact} data ISocialFact
   * @example updateSocialFact("11bf9688-699f-49a4-9d8e-b0cc57301bff", ISocialFact)
   * @returns {Promise<ISocialFact | null>} ISocialFact | null
   */
  async updateSocialFact(id: string, data: ISocialFact): Promise<ISocialFact | null> {
    const ret: ISocialFact | null = await ReligionDB.findByIdAndUpdate(id, data)
    return ret
  }

  /**
   * delete a saved SocialFact in the database
   * @param {string} id ObjectId
   * @example deleteSocialFact('11bf9688-699f-49a4-9d8e-b0cc57301bff')
   * @returns {Promise<ISocialFact | null>} ISocialFact | null
   */
  async deleteSocialFact(id: string): Promise<ISocialFact | null> {
    const ret: ISocialFact | null = await ReligionDB.findByIdAndDelete(id)
    return ret
  }
}
