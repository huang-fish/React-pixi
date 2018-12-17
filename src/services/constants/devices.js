import Immutable from "immutable"

export const DEVICES = Immutable.fromJS({
  iphone_8: {
    label: "iPhone 8",
    value: "iphone_8",
    width: 375,
    height: 667,
    retinaRatio: 2
  },
  iphone_8_plus: {
    label: "iPhone 8 Plus",
    value: "iphone_8_plus",
    width: 414,
    height: 736,
    retinaRatio: 3
  },
  desktop: {
    label: "Desktop",
    value: "desktop",
    width: 960,
    height: 600,
    retinaRatio: 1
  },
  custom: {
    label: "Custom",
    value: "custom",
    width: 960,
    height: 600,
    retinaRatio: 1
  }
})
