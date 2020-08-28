import { Schema } from 'mongoose'

export default {
  player: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    index: true
  },
  campaing: { type: Schema.Types.ObjectId},
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  header: { 
    type: Schema.Types.Mixed, 
    required: true
  },
  body:  { 
    type: Schema.Types.Mixed, 
    required: true
  },
  imageUrl: {
    type: String,
  },
  system: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  }
}