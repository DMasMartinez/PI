
const express = require('express')
const server = express()
const router = require("./router/index")
const morgan = require('morgan')
server.use(morgan('dev'))
server.use(router)
server.use(express.json())


module.exports = server;

