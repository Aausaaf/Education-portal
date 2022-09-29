const { Course } = require("../database/courses")
const jwt = require('jsonwebtoken') 
const getcourses = async(req,res) => {
    let data = await Course.find()
    res.status(200).send(data)
}

const addcourses = async(req,res) => {
   const body = req.body
   if(body)
   {
    let data = await Course(body)
    let result = await data.save()
    res.status(200).send(result)
   }
   else
   {
    res.status(400).send("please provide details")
   }
}


const deletecourse = async(req, res) => {
    try {
        //const {token} = req.headers;
       // const decoded = jwt.verify(token, "uyfrurr67r76r7" );
        const id = req.params.courseId;
        const course = await Course.findById(id);
        if (!course) {
            return res.status(400).send({message: 'course does not exist'});
        }
        //if (course.user.toString() !== decoded._id.toString()) {
       //     return res.status(400).send({message: 'You are not authorized to delete this course'});
       // }
        await Course.findByIdAndDelete(id);
        return res.status(200).send({message: 'Course deleted successfully'});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getsinglecourse = async(req,res) => {
    let data = req.params.name
    if(data)
    {
        let result = await Course.find({name:data})
        if(result)
        {
            res.status(200).send(result)
        }
        else
        {
            res.send("Not Found")
        }

    }
}

module.exports = {
    addcourses,
    getcourses,
    deletecourse,
    getsinglecourse
}