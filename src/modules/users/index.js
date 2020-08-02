const app = require("../../../app");

import { Router } from 'express'
import {getUsers} from './routes/getUsers'
const Routes = Router()

Routes.get(
    '/users',
    getUsers
)

export default Routes