import { UsersRoutes } from './modules/users/routes/index'
import { DiceRoutes } from './modules/dices/routes/index'
import {AuthRoutes} from './modules/login/index'

const allRoutes = (app: any) => {
    app.use('/auth', AuthRoutes)
    app.use(`/user`, UsersRoutes)
    app.use(`/dice`, DiceRoutes)
}

export { allRoutes }