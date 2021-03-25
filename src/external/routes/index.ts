import { Router } from 'express'
import { agentRoutes } from './agentRoutes'
import { conscienceRoutes } from './conscienceRoutes'
import { educationRoutes } from './educationRoutes'
import { familyRoutes } from './familyRoutes'
import { religionRoutes } from './religionRoutes'

const routes = Router()

routes.use('/api/v1/agents', agentRoutes)
routes.use('/api/v1/families', familyRoutes)
routes.use('/api/v1/educations', educationRoutes)
routes.use('/api/v1/religions', religionRoutes)
routes.use('/api/v1/consciences', conscienceRoutes)

export { routes }
