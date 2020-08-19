import { Router } from 'express'
import { getCampaigns } from './get'
import {createCampaign} from './post'
import { getByUser } from './getByUser'
import authenticate from '../../../middleware/authenticate'
const CampaignsRoutes = Router()

// CampaignsRoutes.use(authenticate)

CampaignsRoutes
    .get('/', getCampaigns)
    .get('/user/:id', getByUser)
    .post('/create', createCampaign)


export  { CampaignsRoutes }