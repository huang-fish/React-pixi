import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import { PROJECTS } from '../constants'

import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT
} from './actions'

export const projectsReducers = handleActions({
  GET_PROJECTS: (state, action) =>
    (action.body) ?
      state.set(
        "projects", Immutable.fromJS(
          Object.keys(action.body).map(key => ({...action.body[key], id: key}))
        )
      )
    : state
  ,
  ADD_PROJECT: (state, action) =>
    state.update(
      "projects", projects => projects.concat(
        Immutable.fromJS([action.data.set("id", action.body.name)]
      ))
    ),
  DELETE_PROJECT: (state, action) =>
    state.set(
      "projects", state.get("projects").filter(
        prototype => prototype.get("id") !== action.data.id
      )
    )
}, PROJECTS)
