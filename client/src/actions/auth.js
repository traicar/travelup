import * as api from '../api'
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
  try {

    const { data } = await api.signIn(formData)
    dispatch({ type: AUTH, data })
    //sign in user
    history.push('/')
  } catch (error) {
    console.log(error);
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)
    dispatch({ type: AUTH, data })
    //sing up user
    history.push('/')
  } catch (error) {
    console.log(error);
  }
}