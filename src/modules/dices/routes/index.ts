import { Router } from 'express'
import { rollDice } from './roll'
import authenticate from '../../../middleware/authenticate'
const DiceRoutes = Router()

DiceRoutes.use(authenticate)

DiceRoutes
    .get('/roll', rollDice)

export  { DiceRoutes }