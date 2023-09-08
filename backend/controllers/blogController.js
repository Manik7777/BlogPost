import blogs from '../models/Blog.js';


const getAllBlogs = async (req, res, next) => {
const blogList = await blogs.find();
if (!blogList) {
return res.status (404).json({message: "No Blogs Found"})
}
return res.status (200).json ({blogList})
}
const getBlogById = async (req, res, next) => {
    const bloggy = await blogs.findById(req.params.id);
    if (!bloggy) {
    return res.status(404).json({message: "No Blogs Found"})
    }
    return res.status(200).json({bloggy});
    }
const deleteById = async (req, res, next) => {
    const bloggy = await blogs.findByIdAndDelete(req.params.id);
    if (!bloggy) {
    return res.status(404).json({message: "No Blogs Found"})
    }
    return res.status(200).json({message : 'Blog Successfully Deleted'});
    }
    
const addBlog = async (req, res, next) => {
    const { title,description,image,user} = req.body;
    const blog = new blogs({
        title,description,image,user
    });
    blog.save();
    res.status(201).json({blog});
    }
export { getAllBlogs, addBlog, getBlogById, deleteById};