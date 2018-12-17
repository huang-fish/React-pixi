import { connect } from "react-redux"
import Bunny from "./Bunny"

const BunnyContainer = connect(
  state =>({
    test: state
  }),
  dispatch =>({

  })
)(Bunny)


export default BunnyContainer
