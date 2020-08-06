import { Router } from 'express'
import { getUsers } from './get'
import { createUser } from './post'
import authenticate from '../../../middleware/authenticate'
const UsersRoutes = Router()

UsersRoutes.use(authenticate)

UsersRoutes
    .get('/', getUsers)
    .post('/create', createUser)


export  { UsersRoutes }