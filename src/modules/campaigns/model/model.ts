import { Schema } from 'mongoose'

export default {
  master: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isActive: { type: Boolean, default: true },
  imageUrl: {
    type: String,
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      index: true
    }
  ],
  system: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  }
}