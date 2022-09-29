const express = require('express');
const { createUser, loginUser, isLoggedIn, getUser, getAllUsers, addteacher} = require('../handlers/user');

const userRouter = express.Router();

userRouter.post('/createUser', createUser);
userRouter.post('/loginUser', loginUser);
userRouter.get('/isLoggedIn', isLoggedIn);
userRouter.post("/getuser",getUser)
userRouter.get("/getalluser",getAllUsers)
userRouter.post("/addteacher",addteacher)

module.exports = {userRouter};