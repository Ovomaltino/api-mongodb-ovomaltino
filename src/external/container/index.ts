import 'reflect-metadata'
import TYPES from './types'
import { container } from 'tsyringe'
import EducationRepository from '@adapters/repository/educationRepository'
import FamilyRepository from '@adapters/repository/familyRepository'
import ReligionRepository from '@adapters/repository/religionRepository'
import EducationUseCase from '@useCases/educationUseCase'
import FamilyUseCase from '@useCases/familyUseCase'
import ISocialFactRepository from '@useCases/iSocialFactRepository'
import ISocialFactUseCase from '@useCases/iSocialFactUseCase'
import ReligionUseCase from '@useCases/religionUseCase'
import ConscienceRepository from '@adapters/repository/conscienceRepository'
import ConscienceUseCase from '@useCases/conscienceUseCase'
import AgentRepository from '@adapters/repository/agentRepository'
import AgentUseCase from '@useCases/agentUseCase'
import IAgentRepository from '@useCases/iAgentRepository'
import IAgentUseCase from '@useCases/iAgentUseCase'

container.registerSingleton<ISocialFactRepository>(
  TYPES.ConscienceRepository,
  ConscienceRepository
)

container.registerSingleton<ISocialFactRepository>(
  TYPES.EducationRepository,
  EducationRepository
)

container.registerSingleton<ISocialFactRepository>(
  TYPES.FamilyRepository,
  FamilyRepository
)

container.registerSingleton<ISocialFactRepository>(
  TYPES.ReligionRepository,
  ReligionRepository
)

container.registerSingleton<IAgentRepository>(
  TYPES.AgentRepository,
  AgentRepository
)

container.registerSingleton<ISocialFactUseCase>(
  TYPES.ConscienceUseCase,
  ConscienceUseCase
)

container.registerSingleton<ISocialFactUseCase>(
  TYPES.EducationUseCase,
  EducationUseCase
)

container.registerSingleton<ISocialFactUseCase>(
  TYPES.FamilyUseCase,
  FamilyUseCase
)

container.registerSingleton<ISocialFactUseCase>(
  TYPES.ReligionUseCase,
  ReligionUseCase
)

container.registerSingleton<IAgentUseCase>(
  TYPES.AgentUseCase,
  AgentUseCase
)
