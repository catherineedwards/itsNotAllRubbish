const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.post('/', (req, res) => {
    res.send("NOOOOPE")
})

module.exports = server
