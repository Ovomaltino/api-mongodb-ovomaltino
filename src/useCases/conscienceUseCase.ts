import { inject, injectable } from 'tsyringe'
import TYPES from '@external/container/types'
import ISocialFactUseCase from './iSocialFactUseCase'
import ISocialFactRepository from './iSocialFactRepository'
import ISocialFact from '@entities/ISocialFact'

@injectable()
export default class ConscienceUseCase implements ISocialFactUseCase {
  private repository: ISocialFactRepository

  constructor(@inject(TYPES.ConscienceRepository) agentRepository: ISocialFactRepository) {
    this.repository = agentRepository
  }

  /**
   * Get All Agents in the database
   * @example getAllAgent()
   * @returns {Promise<IAgent[] | null>} IAgent[] | null
   */
  async getSocialFact(
    filters:string | undefined, 
    fields: string | undefined, 
    sort: string | undefined, 
    offset: string | undefined, 
    limit: string| undefined): Promise<ISocialFact[] | null> {

      try {
        const ret: ISocialFact[] | null = await this.repository.getSocialFact(filters,fields,sort,offset,limit)
        return ret
      } catch (error) {
        throw new Error(error);
      }   
  }

  /**
   * save a new SocialFact in the database
   * @param {ISocialFact[]} data ISocialFact[]
   * @example createSocialFact(ISocialFact[] "without id" )
   * @returns {Promise<ISocialFact[]>} ISocialFact[] with id
   */
  async createSocialFact(data: ISocialFact[]): Promise<ISocialFact[]> {
    try {
      const ret: ISocialFact[] = await this.repository.createSocialFact(data)
      return ret
    } catch (error) {
      throw new Error(error);
    }
    
  }

  /**
   * update a saved SocialFact in the database
   * @param {string} id ObjectId
   * @param {ISocialFact} data ISocialFact
   * @example updateSocialFact("11bf9688-699f-49a4-9d8e-b0cc57301bff", ISocialFact)
   * @returns {Promise<ISocialFact | null>} ISocialFact | null
   */
  async updateSocialFact(id: string, data: ISocialFact): Promise<ISocialFact | null> {
    try {
      const ret: ISocialFact | null = await this.repository.updateSocialFact(id, data)
      return ret
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete a saved SocialFact in the database
   * @param {string} id ObjectId
   * @example deleteSocialFact('11bf9688-699f-49a4-9d8e-b0cc57301bff')
   * @returns {Promise<ISocialFact | null>} ISocialFact | null
   */
  async deleteSocialFact(id: string): Promise<ISocialFact | null> {
    try {
      const ret: ISocialFact | null = await this.repository.deleteSocialFact(id)
      return ret
    } catch (error) {
      throw new Error(error);    
    }
  }
}