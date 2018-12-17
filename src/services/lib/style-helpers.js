import {compose} from 'redux'

export const backgroundStyle = (props, ratio, direction = "left") => {
  const deviceWidth = props.device.get("width")
  const {img, imgWidth, imgHeight} = props
  const {background, backgroundColor, backgroundAutoStretch} = props
  const {backgroundImageLeft, backgroundImageLeftWidth, backgroundImageLeftHeight} = props
  const {backgroundImageRight, backgroundImageRightWidth, backgroundImageRightHeight} = props
  const {backgroundImage, backgroundImageWidth, backgroundImageHeight} = props
  let style = {}
  switch(background){
    case "pure_color":
      style["backgroundColor"] = (backgroundColor) ? backgroundColor : "#FFFFFF"
      break
    case "repeat":
      if(backgroundAutoStretch){
        const minusWidth = (imgWidth/ratio <= deviceWidth) ? 0 : (imgWidth/ratio-deviceWidth)/2
        style["backgroundSize"] = `${(imgWidth/ratio)}px ${(imgHeight/ratio)}px`
        style["borderImageSource"] = `url(${img})`
        style["transform"] = `scale(${1/ratio})`
        style["height"] = `${100*ratio}%`
        style["borderWidth"] = (direction==="left") ? `0px ${imgWidth-2-minusWidth}px 0px ${minusWidth}px` : `0px ${minusWidth}px 0px ${imgWidth-2-minusWidth}px`
        style["borderImageSlice"] = (direction==="left") ? `0 ${imgWidth-2-minusWidth} 0 ${minusWidth} fill` : `0 ${minusWidth} 0 ${imgWidth-2-minusWidth} fill`
      }else{
        style["backgroundImage"] = (direction==="left") ? `url(${backgroundImageLeft})` : `url(${backgroundImageRight})`
        style["backgroundSize"] = (direction==="left") ? `${backgroundImageLeftWidth/ratio}px ${backgroundImageLeftHeight/ratio}px` : `${backgroundImageRightWidth/ratio}px ${backgroundImageLeftHeight/ratio}px`
      }
      break
    case "image":
      style["backgroundSize"] = `${backgroundImageWidth/ratio}px ${backgroundImageHeight/ratio}px`
      style["backgroundImage"] = `url(${backgroundImage})`
      break
  }
  return style
}
