const express = require('express')

const { getcourses, addcourses, deletecourse, getsinglecourse } = require('../handlers/courses')

const couresurl = express.Router()

couresurl.get("/getcourses",getcourses)
couresurl.get("/getcourse/:name",getsinglecourse)
couresurl.post("/addcourses",addcourses)
couresurl.delete("/delete/:courseId",deletecourse)
module.exports = {
    couresurl
}