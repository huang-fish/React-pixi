export const LOADING_START = "LOADING_START"
export const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS"
export const LOADING_SUCCESS  = "LOADING_SUCCESS"
export const LOADING_ERROR = "LOADING_ERROR"

export const loadingStart = () => dispatch =>
  dispatch({
    type: LOADING_START,
    percentage: 0,
    isLoaded: false,
    hasError: false
  })

export const loadingInProgress = (percentage) => dispatch =>
  dispatch({
    type: LOADING_IN_PROGRESS,
    percentage
  })

export const loadingSuccess = () => dispatch =>
  dispatch({
    type: LOADING_SUCCESS,
    percentage: 100,
    isLoaded: true
  })

export const loadingError = () => dispatch =>
  dispatch({
    type: LOADING_ERROR,
    percentage: 100,
    hasError: true
  })
