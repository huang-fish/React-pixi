import {compose} from 'redux'

export const reOrderArray =  (list, startIndex, endIndex) => {
  const array = list.filter((item, key) => key!==startIndex)
  const newList = array.insert(endIndex, list.get(startIndex))
  return newList
}
