import express, { Router } from 'express';
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

//get request will work on localhost:5000/posts. imported getPosts from posts.js in controllers for a cleaner code. 
router.get('/', getPosts)
router.post('/', createPost)

export default router