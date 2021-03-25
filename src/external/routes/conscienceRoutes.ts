import { ConscienceController } from '@adapters/controllers/conscienceController'
import { Router } from 'express'
import { container } from 'tsyringe'

const conscienceRoutes = Router()
const conscienceController = container.resolve(ConscienceController)

conscienceRoutes.get('/', (req, res) => conscienceController.get(req, res))
conscienceRoutes.post('/', (req, res) => conscienceController.create(req, res))
conscienceRoutes.put('/:id', (req, res) => conscienceController.update(req, res))
conscienceRoutes.delete('/:id', (req, res) => conscienceController.delete(req, res))

export { conscienceRoutes }
