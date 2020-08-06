import { Router } from 'express'
import { loginUser } from './auth'


const AuthRoutes = Router()

AuthRoutes
    .post('/', loginUser)


export  { AuthRoutes }