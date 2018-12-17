import Immutable from "immutable"

export const PrototypeState = Immutable.fromJS({
  id: "",
  device: {
    height: 0,
    width: 0,
    value: "",
    label: ""
  },
  name: "",
  projectID: "",
  currentScreen: "",
  selectedElement: "",
  screenZoomRatio: 1,
  screens: [],
  thumbnail: "",
  appIcon: "",
  iphoneSkin: "",
  statusBarStyle: "",
  allSameConfiguration: false,
  screen: {
    id: "",
    order: 0,
    name: "",
    fixedHeader: 0,
    fixedFooter: 0,
    imageRatio: "",
    background: "",
    backgroundColor: "",
    backgroundAutoStretch: true,
    backgroundImageLeft: "",
    backgroundImageLeftName: "",
    backgroundImageLeftWidth: 0,
    backgroundImageLeftHeight: 0,
    backgroundImageRight: "",
    backgroundImageRightName: "",
    backgroundImageRightWidth: 0,
    backgroundImageRightHeight: 0,
    backgroundImage: "",
    backgroundImageName: "",
    backgroundImageWidth: 0,
    backgroundImageHeight: 0,
    img: "",
    imgWidth: 0,
    imgHeight: 0,
    elements: []
  },
  element: {
    link: {
      id: "",
      type: "link",
      data: {},
      height: 48,
      width: 48,
      x: 0,
      y: 0,
      zIndex: 1,
      hasLink: true,
      linkScreen: "",
      trigger: "click",
      transition: "none",
      easing: "linear",
      duration: 0.4
    },
    picture: {
      id: "",
      type: "picture",
      data: {
        img: "",
        imgName: "",
        imgWidth: 0,
        imgHeight: 0,
      },
      height: 126,
      width: 224,
      x: 0,
      y: 0,
      zIndex: 1,
      hasLink: false,
      linkScreen: "",
      trigger: "click",
      transition: "none",
      easing: "linear",
      duration: 0.4
    },
    slider: {
      id: "",
      type: "slider",
      data: {
        images: [{
          img: "",
          imgName: "",
          imgWidth: 0,
          imgHeight: 0
        }],
        image: {
          img: "",
          imgName: "",
          imgWidth: 0,
          imgHeight: 0
        },
        hasPagination: true,
        paginationColor: "#FFFFFF",
        hasNavigation: false,
        leftNavigationImage: "",
        leftNavigationImageName: "",
        leftNavigationImageWidth: 30,
        leftNavigationImageHeight: 30,
        rightNavigationImage: "",
        rightNavigationImageName: "",
        rightNavigationImageWidth: 30,
        rightNavigationImageHeight: 30
      },
      height: 320,
      width: 9999,//fit maximum screen width
      x: 0,
      y: 0,
      zIndex: 1,
      hasLink: false,
      linkScreen: "",
      trigger: "click",
      transition: "none",
      easing: "linear",
      duration: 0.4
    },
    carousel: {
      id: "",
      type: "carousel",
      data: {
        images: [
        {
          img: "",
          imgName: "",
          imgWidth: 0,
          imgHeight: 0
        },
        {
          img: "",
          imgName: "",
          imgWidth: 0,
          imgHeight: 0
        }],
        slidesPerView: 2,
        image: {
          img: "",
          imgName: "",
          imgWidth: 0,
          imgHeight: 0
        },
      },
      height: 160,
      width: 9999,//fit maximum screen width
      x: 0,
      y: 0,
      zIndex: 1,
      hasLink: false,
      linkScreen: "",
      trigger: "click",
      transition: "none",
      easing: "linear",
      duration: 0.4
    },
    button: {
      id: "",
      type: "button",
      data: {
        normalImg: "",
        normalImgName: "",
        normalImgWidth: 0,
        normalImgHeight: 0,
        hoverImg: "",
        hoverImgName: "",
        hoverImgWidth: 0,
        hoverImgHeight: 0,
        pressedImg: "",
        pressedImgName: "",
        pressedImgWidth: 0,
        pressedImgHeight: 0,
        activeImg: "",
        activeImgName: "",
        activeImgWidth: 0,
        activeImgHeight: 0,
      },
      height: 40,
      width: 160,
      x: 0,
      y: 0,
      zIndex: 1,
      hasLink: false,
      linkScreen: "",
      trigger: "click",
      transition: "none",
      easing: "linear",
      duration: 0.4
    },
    map: {
      id: "",
      type: "map",
      data: {
        lat: 0,
        lng: 0,
        mapStyle: "appleMapStyle"
      },
      height: 126,
      width: 224,
      x: 0,
      y: 0,
      zIndex: 1,
      hasLink: false,
      linkScreen: "",
      trigger: "click",
      transition: "none",
      easing: "linear",
      duration: 0.4
    }
  }
})

export const CanvasState = Immutable.fromJS({
  targetObj: {
    id: "",
    x: 0,
    y: 0,
    parentX: 0,
    parentY: 0
  },
  sourceObj: {
    id: "",
    x: 0,
    y: 0,
    parentX: 0,
    parentY: 0
  },
  isDisplay: false,
  isConnecting: false,
  isHovering: false
})
