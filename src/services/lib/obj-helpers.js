import Immutable from "immutable"

export const filterObj =  (immutableObj, keys, toObject = false) => {
  const obj = Immutable.Seq(immutableObj).flip().filter(key => keys.includes(key)).flip()
  return (toObject) ? obj.toObject() : obj
}


export const filterRegularObj =  (regularObj, keys) =>
  keys.reduce((a, c) => ({ ...a, [c]: regularObj[c] }), {})

export const findObj = (key, searchValue, objectArray) => {
  let result
  if(objectArray instanceof Array) {
    for(let i = 0; i < objectArray.length; i++) {
      result = findObj(key, searchValue, objectArray[i])
      if(result){
        return result
      }
    }
  }else{
    for(let prop in objectArray) {
      if(prop === key) {
        if(objectArray[prop] === searchValue) {
          return objectArray
        }
      }
      if(objectArray[prop] instanceof Object || objectArray[prop] instanceof Array){
        result = findObj(key, searchValue, objectArray[prop])
      }
    }
  }
  return result
}
