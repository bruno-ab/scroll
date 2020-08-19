import { UsersRoutes } from './modules/users/routes/index'
import { DiceRoutes } from './modules/dices/routes/index'
import {AuthRoutes} from './modules/login/index'
import {CampaignsRoutes} from './modules/campaigns/routes/index'

const allRoutes = (app: any) => {
    app.use('/auth', AuthRoutes)
    app.use(`/user`, UsersRoutes)
    app.use(`/dice`, DiceRoutes)
    app.use(`/campaign`, CampaignsRoutes)
}

export { allRoutes }