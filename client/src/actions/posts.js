import * as api from '../api'
import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionTypes.js';
//action creators- functions that return actions
//response data object is fetched from the api and data post is returned it from the backend

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    console.log(dispatch);
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

//making api request to backend server to create post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    console.log(data);
    dispatch({ type: CREATE, payload: data })
    console.log("CREATED POSTS");
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error);
  }
}