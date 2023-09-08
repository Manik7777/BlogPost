// const express = require('express');
// const mongoose =require('mongoose');
// const {router} = require('./routes/userRoutes');
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import blogRouter from './routes/blogRoutes.js';


async function manik(){
const app = express();
app.use(express.json());
app.use("/manik/user",userRouter);
app.use("/manik/blog",blogRouter);
await mongoose.connect('mongodb+srv://narutodluffyzoro:manik@manik-cluster.fu0t2ux.mongodb.net/blogApp')
app.listen(7777);
}
manik();