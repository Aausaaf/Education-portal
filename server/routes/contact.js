const express = require('express')
const { getcontact } = require('../handlers/contact')

const contactrout = express.Router()

contactrout.get("/getcontact",getcontact)

module.exports = {
    contactrout
}