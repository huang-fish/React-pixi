import { firebaseApp } from "./firebase"
import { saveIdToken } from "../../store/sessionStorage"

// login to firebase
export const loginWithEmailAndPassword = (type = "normal", dispatch, userData) => {
  const starttime = new Date().getTime()
  return firebaseApp.auth().signInWithEmailAndPassword(userData.username, userData.password)
  .then((response) => {
    let user = response.user
    saveIdToken({
      uid: user.uid,
      token: user.qa
    })
    if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
      const endtime = new Date().getTime()
      console.log("login with email & password, spending time: "+(endtime-starttime)+"ms")
    }
    return dispatch({
      id: user.uid,
      displayName: user.displayName,
      email: user.email,
      avatarUrl: user.photoURL,
      type
    })
  })
  .catch((error) => console.error(error.code, error.message))
}
