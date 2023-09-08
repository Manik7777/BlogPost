// const mongoose =require('mongoose');
import mongoose from "mongoose";


const Schema = mongoose.Schema;
const userSchema = Schema({
    name : {
        type : String,
        required : true,

    },
    email : {
        type : String,
        required : true,
        unique : true,

    },
    password : {
        type : String,
        required : true,
        unique : true,

    },
})

// module.exports= {model:  mongoose.model('users',userSchema)};
export default mongoose.model('users',userSchema);