import * as api from '../api'

//action creators- functions that return actions

const getPosts = () => {
  const action = { type: "FETCH_ALL", payload: [] }

  return action;
}