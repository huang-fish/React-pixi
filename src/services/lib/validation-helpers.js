import { formatFiles } from "./files-helpers"

export const validValue = (e, type = "input", limit = "", prefix = "", suffix = "") => {
  let value = (type === "input") ? e.target.value :
              (type === "range") ? e.target.value :
              (type === "select") ? e.value :
              (type === "colorPicker") ? e.hex.toUpperCase() :
              (type === "imgUploader") ? formatFiles(e.target.files) :
              (type === "checkbox") ? e.target.checked :
              e
  value     = (limit === "number") ? value.replace(/^(-?)0+/,'').replace(/[^0-9]/g, '') :
              //(limit === "float") ? value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1') :
              value
  value     = (limit === "number") ?
                (value) ? parseInt(value)
                : 0 :
              (limit === "float") ?
                (value) ? parseFloat(value)
                : 0 :
              (limit === "int") ?
                (value) ? parseInt(value)
                : 0 :
              value

  return value
}

export const isMobileDevice = (currentDeviceValue) => {
  const mobileArray = ["iphone_8", "iphone_8_plus", "iphone_x", "pixel"]
  return mobileArray.includes(currentDeviceValue)
}
