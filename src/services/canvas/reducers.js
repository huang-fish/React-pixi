import {handleActions} from 'redux-actions'
import {CanvasState} from '../constants/models'

import {
  SELECT_TARGET,
  SELECT_SOURCE,
  SCROLL_TARGET_PARENT,
  SCROLL_SOURCE_PARENT,
  UPDATE_CONNECTION,
  UPDATE_DISPLAY_STATUS,
  HOVER_TARGET
} from './actions'

export const canvasReducers = handleActions({
  SELECT_TARGET: (state, action) =>
    state.update(
      "targetObj", targetObj=>targetObj.merge({...action.targetObj})
    ),
  SELECT_SOURCE: (state, action) =>
    state.update(
      "sourceObj", sourceObj=>sourceObj.merge({...action.sourceObj})
    ),
  SCROLL_TARGET_PARENT: (state, action) =>
    state.update(
      "targetObj", targetObj=>targetObj.merge({...action})
    ),
  SCROLL_SOURCE_PARENT: (state, action) =>
    state.update(
      "sourceObj", sourceObj=>sourceObj.merge({...action})
    ),
  UPDATE_CONNECTION: (state, action) =>
    state.set(
      "isConnecting", action.status
    ),
  UPDATE_DISPLAY_STATUS: (state, action) =>
    state.set(
      "isDisplay", action.status
    ),
  HOVER_TARGET: (state, action) =>
    state.set(
      "isHovering", action.status
    ),
}, CanvasState)
