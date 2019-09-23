'use strict'

// app.js
const express = require('express')
const app = express()
const sls = require('serverless-http')

//Handle the GET endpoint on the root route /
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello my new serverless world!')
})

module.exports.server = sls(app)