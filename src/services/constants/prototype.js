import Immutable from "immutable"

export const PROTOTYPE_SINGLE = Immutable.fromJS({
  id: "",
  name: "",
  device: {
    label: "",
    value: "",
    height: 0,
    width: 0,
    retinaRatio: 0
  },
  projectID: "",
  screensCount: 0,
  thumbnail: "",
  appIcon: "",
  iphoneSkin: ""
})

export const PROTOTYPE_SINGLE_MODEL = Immutable.fromJS({
  name: "",
  device: {
    label: "",
    value: "",
    height: 0,
    width: 0,
    retinaRatio: 0
  },
  projectID: "",
  screensCount: 0,
  thumbnail: "",
  appIcon: "",
  iphoneSkin: ""
})
