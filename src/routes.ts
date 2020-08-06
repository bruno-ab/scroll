import { UsersRoutes } from './modules/users/routes/index'
import { DiceRoutes } from './modules/dices/routes/index'
const allRoutes = (app: any) => {
    app.use(`/user`, UsersRoutes)
    app.use(`/dice`, DiceRoutes)
}

export { allRoutes }