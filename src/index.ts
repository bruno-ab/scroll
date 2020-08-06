import express from 'express'
import {connect} from './services/connect'
import {allRoutes} from './routes'
import bodyParser from 'body-parser'
require("dotenv").config()
const app = express()

connect()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3333, () => {
 console.log('scrolling at ... 3333')
})

allRoutes(app)



