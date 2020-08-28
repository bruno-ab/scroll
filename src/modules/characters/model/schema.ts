 
import { model, Schema } from 'mongoose'

const mongooseAggregatePaginate = require('mongoose-aggregate-paginate')

import characterModel from './model'

const characterSchema = new Schema(characterModel, {
  timestamps: true
})

// Plugins
characterSchema.plugin(mongooseAggregatePaginate)

const CharacterSchema = model('playerCharacters', characterSchema)
export default CharacterSchema