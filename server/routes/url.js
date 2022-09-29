const express = require('express');
const { posturl, geturl } = require('../handlers/url');

const urlrouter = express.Router();

urlrouter.post('/createurl',posturl)


module.exports={urlrouter}