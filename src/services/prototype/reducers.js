import Immutable from "immutable"
import { handleActions } from "redux-actions"
import { PROTOTYPE_SINGLE } from "../constants"

import {
  GET_PROTOTYPE,
  CLEAR_PROTOTYPE,
  ADD_APPICON,
  UPDATE_SCREENS_COUNT
} from "./actions"

export const prototypeReducers = handleActions({
  GET_PROTOTYPE: (state, action) =>
    (action.body) ?
      Immutable.fromJS({
        ...action.body,
        id: action.data.id
      })
    : state
  ,
  CLEAR_PROTOTYPE: (state, action) =>
    action.model
  ,
  ADD_APPICON: (state, action) =>
    state.set(
      "appIcon", action.data.appIcon
    )
  ,
  UPDATE_SCREENS_COUNT: (state, action) =>
    state.set(
      "screensCount", action.data.screensCount
    )
  ,
}, PROTOTYPE_SINGLE)
