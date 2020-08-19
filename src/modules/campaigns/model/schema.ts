 
import { model, Schema } from 'mongoose'

const mongooseAggregatePaginate = require('mongoose-aggregate-paginate')

import campaignModel from './model'

const campaignSchema = new Schema(campaignModel, {
  timestamps: true
})

// Plugins
campaignSchema.plugin(mongooseAggregatePaginate)

const CampaignSChema = model('campaigns', campaignSchema)
export default CampaignSChema