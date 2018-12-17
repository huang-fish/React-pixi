import { handleActions } from "redux-actions"
import { USER } from "../constants"

import {
  LOGIN_USER,
  GET_USER_INFO,
} from "./actions"

export const userReducers = handleActions({
  LOGIN_USER: (state, action) =>
    state.merge({
      ...action
    })

}, USER)
