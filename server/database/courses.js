const mongoose = require('mongoose')

const courseScema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    banner:{
        type:String,
        required:true
    },
    body:{
        type:Object,
        required:true
    }

})

const Course = mongoose.model('course',courseScema)
module.exports = {
    Course
}