import { Router } from 'express'
import { getCampaigns } from './get'
import {createCampaign} from './post'
import { getByUser } from './getByUser'
import {invitePlayer} from './invitePlayers'
import authenticate from '../../../middleware/authenticate'
const CampaignsRoutes = Router()

// CampaignsRoutes.use(authenticate)

CampaignsRoutes
    .get('/user/', getByUser)
    .get('/:id', getCampaigns)
    .post('/create', createCampaign)
    .patch('/invite/:id', invitePlayer)
    .patch('/:id', invitePlayer)


export  { CampaignsRoutes }