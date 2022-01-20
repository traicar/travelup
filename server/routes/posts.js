import express, { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router();

//get request will work on localhost:5000/posts. imported getPosts from posts.js in controllers for a cleaner code. 
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router