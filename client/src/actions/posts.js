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