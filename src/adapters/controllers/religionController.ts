import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import TYPES from '@external/container/types'
import ISocialFact from '@entities/ISocialFact'
import ISocialFactUseCase from '@useCases/iSocialFactUseCase'

@injectable()
export class ReligionController {
  private usecase: ISocialFactUseCase

  constructor(@inject(TYPES.ReligionUseCase) _usecase: ISocialFactUseCase) {
    this.usecase = _usecase
  }

  /**
   * Receive a get request and
   * return all SocialFact filter by a query in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example get()
   * @returns {Promise<Response | void>} ISocialFact[] | 404 
   */
  async get(req: Request, res: Response): Promise<Response | void> {
    try {
      const offset: string | undefined = req.query.offset?.toString()
      const limit: string | undefined = req.query.limit?.toString()
      const filters: string | undefined = req.query.filters?.toString()
      const fields: string | undefined = req.query.fields?.toString()
      const sort: string | undefined = req.query.sort?.toString()

      const mas: ISocialFact[] | null = await this.usecase.getSocialFact(filters, fields, sort, offset, limit)
      if (mas == null) {
        return res.sendStatus(404)
      }
      return res.send(mas)
    } catch (error) {
      res.sendStatus(400).send(error)
      res.end(error)
    }
  }

  /**
   * receive a post request with data to insert a 
   * new SocialFact in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example create(ISocialFact[])
   * @returns {Promise<Response | void>} ISocialFact[]
   */
  async create(req: Request, res: Response): Promise<Response | void> {
    try {
      const data: ISocialFact[] = req.body
      const mas: ISocialFact[] = await this.usecase.createSocialFact(data)
      return res.json(mas)
    } catch (error) {
      res.sendStatus(400).send(error)
      res.end(error)
    }
  }

  /**
   * receive a put request with a id to
   * update this SocialFact in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example update(ISocialFact)
   * @returns {Promise<Response | void>} ISocialFact | 404
   */
  async update(req: Request, res: Response): Promise<Response | void> {
    try {
      const masId: string = req.params.id
      const data: ISocialFact = req.body
      const mas: ISocialFact | null = await this.usecase.updateSocialFact(masId, data)
      if (mas == null) {
        return res.sendStatus(404)
      }
      return res.json(mas)
    } catch (error) {
      res.sendStatus(400).send(error)
      res.end(error)
    }
  }

  /**
   * receive a delete request with a id to
   * delete this SocialFact in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example delete(ISocialFact)
   * @returns {Promise<Response | void>} ISocialFact | 404
   */
  async delete(req: Request, res: Response): Promise<Response | void> {
    try {
      const masId: string = req.params.id
      const mas: ISocialFact | null = await this.usecase.deleteSocialFact(masId)
      if (mas == null) {
        return res.sendStatus(404)
      }
      return res.send(mas)
    } catch (error) {
      res.sendStatus(400).send(error)
      res.end(error)
    }
  }
}
