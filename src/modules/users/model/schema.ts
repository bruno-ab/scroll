 
import { model, Schema } from 'mongoose'

const mongooseAggregatePaginate = require('mongoose-aggregate-paginate')

import userModel from './model'

const userSchema = new Schema(userModel, {
  timestamps: true
})

// Plugins
userSchema.plugin(mongooseAggregatePaginate)

const UserSChema = model('users', userSchema)
export default UserSChema