import { Schema, model } from 'mongoose'
import iAgentDB from '../interfaces/iAgentDB'

const AgentSchema: Schema = new Schema<iAgentDB> (
  {
    birth: { type: Date, required: true },
    progenitor: { type: String, required: true },
    becomeLeader: { type: Date },
    leader: { type: Boolean, required: true },
    death: { type: Date },
    life: { type: Number, required: true },
    memory: [{
      isLearner: { type: Boolean, required: true },
      inputValue: { type: Schema.Types.Mixed, required: true },
      action: { type: Schema.Types.Mixed, required: true }
    }],
    sanctions: [{
      input_value: { type: Schema.Types.Mixed, required: true },
      action: { type: Schema.Types.Mixed, required: true },
      level: { type: Number, required: true }
    }],
    actions: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

const AgentDB = model<iAgentDB>('agent', AgentSchema)

export default AgentDB
