import express from 'express';
import { getAllBlogs,addBlog,getBlogById,deleteById } from '../controllers/blogController.js';

const blogRouter = express. Router();
blogRouter.get("/list",getAllBlogs);
blogRouter.get("/:id",getBlogById);
blogRouter.post("/add",addBlog);
blogRouter.delete("/:id",deleteById);

export default blogRouter;