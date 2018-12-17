import { connect } from "react-redux"
import CC from "./CC"

const CCContainer = connect(
  state =>({
    test: state
  }),
  dispatch =>({

  })
)(CC)


export default CCContainer
