const express = require('express')
const { getabout } = require('../handlers/about')

const aboutrout = express.Router()

aboutrout.get("/getabout",getabout)

module.exports = {
    aboutrout
}