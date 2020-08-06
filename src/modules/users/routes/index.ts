import { Router } from 'express'
import { getUsers } from './get'
import { createUser } from './post'

const UsersRoutes = Router()

UsersRoutes
    .get('/', getUsers)
    .post('/create', createUser)


export  { UsersRoutes }