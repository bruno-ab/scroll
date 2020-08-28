import express from 'express'
import {connect} from './services/connect'
import {allRoutes} from './routes'
import bodyParser from 'body-parser'
import { initAllScheduleJobs } from './config/bin/scheduleJobs'
require("dotenv").config()
const app = express()

connect()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3333, () => {
 console.log('scrolling at ... 3333')
})

initAllScheduleJobs()

allRoutes(app)



