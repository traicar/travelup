import mongoose from 'mongoose';

//schema helps to create documents. this is the format of each post. 
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage