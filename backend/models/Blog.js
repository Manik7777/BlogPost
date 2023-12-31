import mongoose from "mongoose";

const Schema = mongoose.Schema;
const blogSchema = Schema({
    title: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
        },
    image: {
        type: String,
        required: true,
        },
    user: {
        type: String,
        required : true,
        }
});

export default mongoose.model('blogs',blogSchema);