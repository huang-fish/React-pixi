import { handleActions } from "redux-actions"
import { UI } from "../constants"

import {
  LOADING_START,
  LOADING_IN_PROGRESS,
  LOADING_SUCCESS,
  LOADING_ERROR
} from "./actions"

export const uiReducers = handleActions({
  LOADING_START: (state, action) =>
    state.mergeIn(["progressBar"],
      {
        percentage: action.percentage,
        isLoaded: action.isLoaded,
        hasError: action.hasError
      }
    ),
  LOADING_IN_PROGRESS: (state, action) =>
    state.mergeIn(["progressBar"],
      {
        percentage: action.percentage
      }
    ),
  LOADING_SUCCESS: (state, action) =>
    state.mergeIn(["progressBar"],
      {
        percentage: action.percentage,
        isLoaded: action.isLoaded
      }
    ),
  LOADING_ERROR: (state, action) =>
    state.mergeIn(["progressBar"],
      {
        percentage: action.percentage,
        hasError: action.hasError
      }
    )
}, UI)
