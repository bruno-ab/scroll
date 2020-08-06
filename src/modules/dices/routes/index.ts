import { Router } from 'express'
import { rollDice } from './roll'
const DiceRoutes = Router()

DiceRoutes
    .get('/roll', rollDice)



export  { DiceRoutes }