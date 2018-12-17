import { readIdToken } from "../../store/sessionStorage"
import { loadingStart, loadingInProgress, loadingSuccess, loadingError } from "../ui/actions"
import axios from "axios"

// pass data to database then return the result to redux
export const axiosThenDispatch = (type = "normal", dispatch, urlParam, method, data = {}) => {

}

// pass data to redux then update to database
export const dispatchThenAxios = (type = "normal", dispatch, urlParam, method, data = {}) => {

}
