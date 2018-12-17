export const SELECT_TARGET = "SELECT_TARGET"
export const SELECT_SOURCE = "SELECT_SOURCE"
export const SCROLL_TARGET_PARENT = "SCROLL_TARGET_PARENT"
export const SCROLL_SOURCE_PARENT = "SCROLL_SOURCE_PARENT"
export const UPDATE_CONNECTION = "UPDATE_CONNECTION"
export const UPDATE_DISPLAY_STATUS = "UPDATE_DISPLAY_STATUS"
export const HOVER_TARGET = "HOVER_TARGET"

export const selectTarget = (targetObj) => dispatch =>
  dispatch({
    targetObj,
    type: SELECT_TARGET
  })

export const selectSource = (sourceObj) => dispatch =>
  dispatch({
    sourceObj,
    type: SELECT_SOURCE
  })

export const scrollTargetParent = (parentX, parentY) => dispatch =>
  dispatch({
    parentX,parentY,
    type: SCROLL_TARGET_PARENT
  })

export const scrollSourceParent = (parentX, parentY) => dispatch =>
  dispatch({
    parentX, parentY,
    type: SCROLL_SOURCE_PARENT
  })

export const updateConnection = (status) => dispatch =>
  dispatch({
    status,
    type: UPDATE_CONNECTION
  })

export const updateDisplayStatus = (status) => dispatch =>
  dispatch({
    status,
    type: UPDATE_DISPLAY_STATUS
  })

export const hoverTarget = (status) => dispatch =>
  dispatch({
    status,
    type: HOVER_TARGET
  })
