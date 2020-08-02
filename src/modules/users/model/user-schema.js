import { model, Schema } from 'mongoose'

const mongooseAggregatePaginate = require('mongoose-aggregate-paginate')

import userModel from './user-model'

const userSchema = new Schema(userSchema, {
  timestamps: true
})

// Plugins
userSchema.plugin(mongooseAggregatePaginate)

const UserSChema = model('user-model', userSchema)
export default UserSChema
