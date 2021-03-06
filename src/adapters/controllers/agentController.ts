import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import TYPES from '@external/container/types'
import IAgent from '@entities/IAgent'
import IAgentUseCase from '@useCases/iAgentUseCase'

@injectable()
export class AgentController {
  private usecase: IAgentUseCase

  constructor(@inject(TYPES.AgentUseCase) _usecase: IAgentUseCase) {
    this.usecase = _usecase
  }

  /**
   * Receive a get request and
   * return all Agent filter by a query in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example get()
   * @returns {Promise<Response | void>} IAgent[] | 404 
   */
  async get(req: Request, res: Response): Promise<Response | void> {
    try {
      const offset: string | undefined = req.query.offset?.toString()
      const limit: string | undefined = req.query.limit?.toString()
      const filters: string | undefined = req.query.filters?.toString()
      const fields: string | undefined = req.query.fields?.toString()
      const sort: string | undefined = req.query.sort?.toString()

      const mas: IAgent[] | null = await this.usecase.getAgent(filters, fields, sort, offset, limit)
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
   * new Agent in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example create(IAgent[])
   * @returns {Promise<Response | void>} IAgent[]
   */
  async create(req: Request, res: Response): Promise<Response | void> {
    try {
      const data: IAgent[] = req.body
      const mas: IAgent[] = await this.usecase.createAgent(data)
      return res.json(mas)
    } catch (error) {
      res.sendStatus(400).send(error)
      res.end(error)
    }
  }

  /**
   * receive a put request with a id to
   * update this Agent in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example update(IAgent)
   * @returns {Promise<Response | void>} IAgent | 404
   */
  async update(req: Request, res: Response): Promise<Response | void> {
    try {
      const masId: string = req.params.id
      const data: IAgent = req.body
      const mas: IAgent | null = await this.usecase.updateAgent(masId, data)
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
   * delete this Agent in the db
   * @param {Request} req request
   * @param {Response} res response
   * @example delete(IAgent)
   * @returns {Promise<Response | void>} IAgent | 404
   */
  async delete(req: Request, res: Response): Promise<Response | void> {
    try {
      const masId: string = req.params.id
      const mas: IAgent | null = await this.usecase.deleteAgent(masId)
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
