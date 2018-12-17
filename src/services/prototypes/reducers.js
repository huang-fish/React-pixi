import Immutable from "immutable"
import { handleActions } from "redux-actions"
import { PROTOTYPES } from "../constants"

import {
  GET_PROTOTYPES,
  ADD_PROTOTYPE,
  DELETE_PROTOTYPE
} from "./actions"

export const prototypesReducers = handleActions({
  GET_PROTOTYPES: (state, action) =>
    (action.body) ?
      state.set(
        "prototypes", Immutable.fromJS(
          Object.keys(action.body).map(key => ({...action.body[key], id: key}))
        )
      )
    : state
  ,
  ADD_PROTOTYPE: (state, action) =>
    state.update(
      "prototypes", prototypes => prototypes.concat(
        Immutable.fromJS([action.data.set("id", action.body.name)]
      ))
    ),
  DELETE_PROTOTYPE: (state, action) =>
    state.set(
      "prototypes", state.get("prototypes").filter(
        prototype => prototype.get("id") !== action.data.id
      )
    )
}, PROTOTYPES)


export const prototypeReducers = handleActions({

}, PROTOTYPES)
