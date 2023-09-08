// const User = require("../models/User");
// const users = require( "../models/User");
// const bcrypt = require('bcryptjs');
import User from "../models/User.js";
import users from '../models/User.js';
import bcrypt from 'bcryptjs';


const getAllUsers = async(req,res,next)=>{
    const userList= await users.find();
    if(!userList){
        return res.status(404).json({message : "No data found !"});
    }
    return res.status(200).json({userList});
}
const signUp = async(req,res,next)=>{
    let existingUser;
    const { password , email ,name} = req.body;
    existingUser = await User.findOne({email});
    if(!existingUser){
        const hashedPassword = bcrypt.hashSync(password);
        const user = new User.model({
            name,email,password : hashedPassword
        });
        user.save();
        return res.status(201).json({user});
    }
    return res.status(400).json({message : "User Already Exists ! "});
}

const logIn = async(req,res,next)=>{
    let existingUser;
    const { password , email } = req.body;
    existingUser = await User.findOne({email});
    if(!existingUser){    
    return res.status(404).json({message : "User does not exist ! "});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message : "Incorrect Password"});
    }
    return res.status(200).json({message : "Login Successful"});
}

//  module.exports = { getAllUsers, signUp,logIn};
export { getAllUsers, signUp,logIn};