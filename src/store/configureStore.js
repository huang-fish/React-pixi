import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { prototypesReducers } from "../services/prototypes/reducers"
import { prototypeReducers } from "../services/prototype/reducers"
import { projectsReducers } from "../services/projects/reducers"
import { screensReducers } from "../services/screens/reducers"
import { canvasReducers } from "../services/canvas/reducers"
import { uiReducers } from "../services/ui/reducers"

const clientLogger = store => next => action =>{
  if(action.type){
    let result
    if(!process.env.NODE_ENV || process.env.NODE_ENV === "development"){
      console.groupCollapsed("dispatching", action.type)
      console.log("prev state", store.getState().screensReducers.toJS())
      console.log("action", action)
    }
    result = next(action)
    if(!process.env.NODE_ENV || process.env.NODE_ENV === "development"){
      console.log("next state", store.getState().screensReducers.toJS())
      console.groupEnd()
    }
    return result
  }else{
    return next(action)
  }
}

const serverLogger = store => next => action => {
  if(!process.env.NODE_ENV || process.env.NODE_ENV === "development"){
    console.log("server logger", action)
  }
  return next(action)
}

const middleware = server => [
  (server) ? serverLogger : clientLogger, thunk
]

const storeFactory = (server = false, preloadedState = {}) =>
  applyMiddleware(...middleware(server))(createStore)(
    combineReducers({
      prototypeReducers,
      prototypesReducers,
      projectsReducers,
      screensReducers,
      canvasReducers,
      uiReducers
    }),
    preloadedState
  )

export default storeFactory
