import { axiosThenDispatch, dispatchThenAxios } from "../server/WebAPI"
import { PROJECT_MODEL } from "../constants"

export const GET_PROJECTS = "GET_PROJECTS"
export const ADD_PROJECT = "ADD_PROJECT"
export const DELETE_PROJECT = "DELETE_PROJECT"

export const getProjects = () => dispatch =>
  axiosThenDispatch(
    GET_PROJECTS,
    dispatch,
    "/projects/",
    "GET"
  )

export const addProject = (project) => dispatch =>
  axiosThenDispatch(
    ADD_PROJECT,
    dispatch,
    "/projects/",
    "POST",
    PROJECT_MODEL.merge({
      ...project
    })
  )

export const deleteProject = (projectID) => dispatch =>
  dispatchThenAxios(
    DELETE_PROJECT,
    dispatch,
    "/projects/:id",
    "DELETE",
    {id: projectID}
  )
