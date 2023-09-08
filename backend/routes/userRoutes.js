// const express = require('express');
// const {getAllUsers,signUp,logIn} = require("../controllers/userController");
import express from 'express';
import {getAllUsers,signUp,logIn} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.get("/list",getAllUsers);
userRouter.post("/signUp",signUp);
userRouter.post("/login",logIn);

// module.exports = {router};
export default userRouter;