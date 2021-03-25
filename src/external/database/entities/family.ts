import { Schema, model } from 'mongoose'
import iSocialFactDB from '../interfaces/iSocialFactDB'


const FamilySchema: Schema = new Schema<iSocialFactDB> (
  {
    name: { type: String, required: true },
    moral: [{
      inputValue: { type: Schema.Types.Mixed, required: true },
      outputValue: { type: Schema.Types.Mixed, required: true },
    }],
    sanction_level: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

const FamilyDB = model<iSocialFactDB>('family', FamilySchema)

export default  FamilyDB
