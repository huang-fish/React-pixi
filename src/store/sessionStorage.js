export const saveIdToken = (data) => {
  sessionStorage.setItem("prott-id-token", JSON.stringify(data))
}

export const readIdToken = () => {
  return JSON.parse(sessionStorage.getItem("prott-id-token"))
}
