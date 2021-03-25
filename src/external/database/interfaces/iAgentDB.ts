import IAgent from '@entities/IAgent';
import { Document } from 'mongoose'

export default interface iAgentDB extends IAgent, Document {

}