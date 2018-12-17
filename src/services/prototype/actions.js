import { axiosThenDispatch, dispatchThenAxios, uploadFilesThenReturn } from "../server/WebAPI"
import { PROTOTYPE_SINGLE_MODEL } from "../constants"

export const GET_PROTOTYPE = "GET_PROTOTYPE"
export const CLEAR_PROTOTYPE = "CLEAR_PROTOTYPE"

export const ADD_APPICON = "ADD_APPICON"
export const UPDATE_SCREENS_COUNT = "UPDATE_SCREENS_COUNT"

export const getPrototype = (prototypeID) => dispatch =>
  axiosThenDispatch(
    GET_PROTOTYPE,
    dispatch,
    "/prototypes/:id",
    "GET",
    {id: prototypeID}
  )

export const clearPrototype = () => dispatch =>
  dispatch({
    type: CLEAR_PROTOTYPE,
    model: PROTOTYPE_SINGLE_MODEL
  })

export const addAppIcon = (prototypeID, files) => dispatch =>
  uploadFilesThenReturn(files, dispatch)
  .then(images =>
    dispatchThenAxios(
      ADD_APPICON,
      dispatch,
      "/prototypes/:id",
      "PATCH",
      {
        id: prototypeID,
        appIcon: images[0]["url"]
      }
    )
  )

export const updateScreensCount = (prototypeID, screensCount) => dispatch =>
  dispatchThenAxios(
    UPDATE_SCREENS_COUNT,
    dispatch,
    "/prototypes/:id",
    "PATCH",
    {
      id: prototypeID,
      screensCount
    }
  )
