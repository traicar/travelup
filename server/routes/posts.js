import express, { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'

const router = express.Router();

//get request will work on localhost:5000/posts. imported getPosts from posts.js in controllers for a cleaner code. 
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router