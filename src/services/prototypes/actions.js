import { axiosThenDispatch, dispatchThenAxios } from "../server/WebAPI"
import { PROTOTYPE_MODEL } from "../constants/prototypes"
import { deleteAllScreens } from "../screens/actions"

export const GET_PROTOTYPES = "GET_PROTOTYPES"
export const ADD_PROTOTYPE  = "ADD_PROTOTYPE"
export const DELETE_PROTOTYPE  = "DELETE_PROTOTYPE"

export const getPrototypes = () => dispatch =>
  axiosThenDispatch(
    GET_PROTOTYPES,
    dispatch,
    "/prototypes/",
    "GET"
  )

export const addPrototype = (prototype) => dispatch =>
  axiosThenDispatch(
    ADD_PROTOTYPE,
    dispatch,
    "/prototypes/",
    "POST",
    PROTOTYPE_MODEL.merge({
      ...prototype,
      thumbnail: PROTOTYPE_MODEL.get("thumbnail").replace("desktop", prototype.device.value)
    })
  )

export const deletePrototype = (prototypeID) => dispatch =>
  dispatchThenAxios(
    DELETE_PROTOTYPE,
    dispatch,
    "/prototypes/:id",
    "DELETE",
    {id: prototypeID}
  )
