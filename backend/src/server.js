
const express = require('express')
const server = express()
const router = require("./router/index")
const morgan = require('morgan')
server.use(express.json())
server.use(morgan('dev'))
server.use(router)



module.exports = server;

