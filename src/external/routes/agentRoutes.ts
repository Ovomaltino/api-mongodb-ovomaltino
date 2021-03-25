import { AgentController } from '@adapters/controllers/agentController'
import { Router } from 'express'
import { container } from 'tsyringe'

const agentRoutes = Router()
const agentController = container.resolve(AgentController)

agentRoutes.get('/', (req, res) => agentController.get(req, res))
agentRoutes.post('/', (req, res) => agentController.create(req, res))
agentRoutes.put('/:id', (req, res) => agentController.update(req, res))
agentRoutes.delete('/:id', (req, res) => agentController.delete(req, res))

export { agentRoutes }
