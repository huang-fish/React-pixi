import Immutable from "immutable"
import { handleActions } from "redux-actions"
import { SCREENS } from "../constants"

import {
  GET_SCREENS,
  ADD_SCREENS,
  DELETE_ALL_SCREENS
} from "./actions"

export const screensReducers = handleActions({
  GET_SCREENS: (state, action) =>
    (action.body) ?
      state.set(
        "screens", Immutable.fromJS(
          Object.keys(action.body).map(key => ({...action.body[key], id: key}))
        )
      )
    : state
  ,
  ADD_SCREENS: (state, action) =>
    state.update(
      "screens", screens => screens.concat(
        Immutable.fromJS([action.data.set("id", action.body.name)]
      ))
    ),
  DELETE_ALL_SCREENS: (state, action) =>
    state.set(
      "screens", Immutable.fromJS([])
    )
}, SCREENS)
