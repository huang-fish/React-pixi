import { connect } from "react-redux"
import ClickExample from "./ClickExample"

const ClickExampleContainer = connect(
  state =>({
    test: "test"
  }),
  dispatch =>({

  })
)(ClickExample)


export default ClickExampleContainer
