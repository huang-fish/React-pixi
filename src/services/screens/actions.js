import { axiosThenDispatch, dispatchThenAxios, uploadFilesThenReturn } from "../server/WebAPI"
import { SCREEN_MODEL } from "../constants"
import { updateScreensCount } from "../prototype/actions"

export const GET_SCREENS = "GET_SCREENS"
export const ADD_SCREENS = "ADD_SCREENS"
export const DELETE_ALL_SCREENS = "DELETE_ALL_SCREENS"

export const getScreens = (prototypeID) => dispatch =>
  axiosThenDispatch(
    GET_SCREENS,
    dispatch,
    "/screens/:prototypeID",
    "GET",
    {prototypeID}
  )

export const addScreens = (prototypeID, currentScreensCount, files) => dispatch =>
  uploadFilesThenReturn(files, dispatch)
  .then(images =>
    images.map( (img, index) =>
      axiosThenDispatch(
        ADD_SCREENS,
        dispatch,
        "/screens/",
        "POST",
        SCREEN_MODEL.merge({
          prototypeID,
          img,
          order: (currentScreensCount+index)
        })
      )
    )
  )
  .then(() =>
    dispatch(
      updateScreensCount(prototypeID, files.length+currentScreensCount)
    )
  )

export const deleteAllScreens = (prototypeID) => dispatch =>
  dispatchThenAxios(
    DELETE_ALL_SCREENS,
    dispatch,
    "/screens/:prototypeID",
    "DELETE",
    {prototypeID}
  )
