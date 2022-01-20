import mongoose from 'mongoose';

//schema helps to create documents. this is the format of each user. 
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
})



export default mongoose.model('User', userSchema)