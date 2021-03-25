import ISocialFact from '@entities/ISocialFact';
import { Document } from 'mongoose'

export default interface iSocialFactDB extends ISocialFact, Document {

}