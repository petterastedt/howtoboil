// SETUP
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./routes/index')
const cors = require('cors')
const express = require('express')
const app = express()

require('./configs/database')

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', routes)

  app.use('/api/*', (req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
  })

module.exports = app