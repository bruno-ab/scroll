import { Router } from 'express'
import authenticate from '../../../middleware/authenticate'
import {createCharacter} from './post'
import {getCharacter} from './get'
const CharacterRoutes = Router()

// CampaignsRoutes.use(authenticate)

CharacterRoutes
    .post('/create', createCharacter)
    .get('/:id', getCharacter)



export  { CharacterRoutes }