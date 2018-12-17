import { firebaseStorage } from "./firebase"
import { loadingStart, loadingInProgress, loadingSuccess, loadingError } from "../ui/actions"
import { readIdToken } from "../../store/sessionStorage"

// upload files to cloud storage then return url address array
export const uploadFilesThenReturn = (files, dispatch) => {
  const IdToken = readIdToken()
  return Promise.all(files.map(file => uploadFileToFirebase(IdToken.uid, file, dispatch)))
  .then((filesArray) => filesArray)
}

const uploadFileToFirebase = (uid, file, dispatch) => {
  const path = `/images/${uid}/${file.name}.${file.extension}`
  const storageRef = firebaseStorage.ref(path)
  const uploadTask = storageRef.put(file.file)
  dispatch(loadingStart())
  uploadTask.on("state_changed", (snapshot) => {
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    dispatch(loadingInProgress(progress))
  }, () => {
    dispatch(loadingError())
  })

  return uploadTask
  .then((snapshot) => storageRef.getDownloadURL()
  .then((url) => ({
    url,
    width: (file.isImage) ? file.width : null,
    height: (file.isImage) ? file.height : null,
  }))
  .then(() => dispatch(loadingSuccess())))
}
