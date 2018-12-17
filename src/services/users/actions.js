import {loginWithEmailAndPassword} from "../server/WebAPI"

export const LOGIN_USER = "LOGIN_USER"
export const GET_USER_INFO = "GET_USER_INFO"

export const loginUser = (username, password) => dispatch =>
  loginWithEmailAndPassword(
    LOGIN_USER,
    dispatch,
    {username, password}
  )
