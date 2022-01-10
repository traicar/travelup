import axios from 'axios';

//connecting front end to back end

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)