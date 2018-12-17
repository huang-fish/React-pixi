import Immutable from 'immutable'
import {compose} from 'redux'

export const calculateLeftPosition =  (originalIndex, newIndex, rect, maxRow) => {
  const leftIndex = newIndex%maxRow-originalIndex%maxRow
  const singleObjWidth = rect.left+rect.width+rect.right
  return (maxRow) ? leftIndex*singleObjWidth : 0
}

export const calculateTopPosition =  (originalIndex, newIndex, rect, maxRow) => {
  const topIndex = Math.floor(newIndex/maxRow)-Math.floor(originalIndex/maxRow)
  const singleObjHeight = rect.top+rect.height+rect.bottom
  return (maxRow) ? topIndex*singleObjHeight : 0
}

export const calculateIndex = (offset, rect, maxRow) => {
  let x = Math.floor((offset.left/(rect.left+rect.width+rect.right)))
  let y = Math.floor(offset.top/(rect.top+rect.height+rect.bottom))
  x = x > 0 ? x : 0
  y = y > 0 ? y : 0
  return (y*maxRow)+x
}

const stickBorder = (originalValue, alignArray, disabled = false, minValue = 0) => {
  let array = alignArray.filter(value => Math.abs(originalValue-value)<minValue)
  return (array.length&&!disabled) ? ({value: array[0], isSticked: true}) : ({value: originalValue, isSticked: false})
}

export const stickValues = ({originalValues, alignArrayObject, border, action, minValue}) => {
  const stickX  = stickBorder(
    originalValues.x,
    alignArrayObject.x.concat((border.width-originalValues.width)),
    (action.hor==="right"),
    minValue
  )
  const stickY  = stickBorder(
    originalValues.y,
    alignArrayObject.y.concat((border.height-originalValues.height)),
    (action.ver==="bottom"),
    minValue
  )
  const stickWidth = stickBorder(
    originalValues.width,
    alignArrayObject.x.concat((border.width-originalValues.x)),
    (action.hor==="move"||(Math.abs(border.width-(originalValues.width+originalValues.y))<minValue&&action.hor==="left")),
    minValue
  )
  const stickHeight = stickBorder(
    originalValues.height,
    alignArrayObject.y.concat((border.height-originalValues.y)),
    (action.ver==="move"||(Math.abs(border.height-(originalValues.height+originalValues.y))<minValue&&action.ver==="top")),
    minValue
  )

  return({
    x : stickX.value,
    y : stickY.value,
    width : (action.hor!=="move") ? (!stickX.isSticked||stickWidth.isSticked) ? stickWidth.value : originalValues.width+(originalValues.x-stickX.value) : originalValues.width,
    height : (action.ver!=="move") ? (!stickY.isSticked||stickHeight.isSticked) ? stickHeight.value : originalValues.height+(originalValues.y-stickY.value) : originalValues.height
  })
}
