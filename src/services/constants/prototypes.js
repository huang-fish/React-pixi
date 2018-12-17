import Immutable from "immutable"

export const PROTOTYPES = Immutable.fromJS({
  prototypes: []
})

export const PROTOTYPE_MODEL = Immutable.fromJS({
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
  thumbnail: "/images/pic_default_desktop_thumbnail.png",
  appIcon: "/images/pic_default_appIcon.svg",
  iphoneSkin: "white"
})
