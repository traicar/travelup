import PostMessage from "../models/postMessage.js"
import { Mongoose } from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const body = req.body;
  const newPost = new PostMessage(body)
  try {
    await newPost.save()
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body
  if (!Mongoose.Types.ObjectsId.isValid(_id)) return res.status(404).send('No post with that Id');

  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })

  res.json(updatePost)
}
