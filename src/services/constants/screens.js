import Immutable from "immutable"

export const SCREENS = Immutable.fromJS({
  screens: []
})

export const SCREEN_MODEL = Immutable.fromJS({
  prototypeID: "",
  order: 0,
  name: "",
  fixedHeader: 0,
  fixedFooter: 0,
  background: {
    value: "pure_color",
    data: {
      backgroundColor: "#FFFFFF"
    }
  },
  img: {
    url: "",
    width: 0,
    height: 0
  }
})
