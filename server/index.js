import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({ limit: "32mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://travelup:GUDishere@cluster0.3louu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
  .catch(err => console.log(err.message))