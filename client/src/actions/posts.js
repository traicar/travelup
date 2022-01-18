import * as api from '../api'

//action creators- functions that return actions
//response data object is fetched from the api and data post is returned it from the backend

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    //making api request to backend server
    const { data } = await api.createPost(post)
    dispatch({ type: "CREATE", payload: data })
  } catch (error) {
    console.log(error.message)
  }
}