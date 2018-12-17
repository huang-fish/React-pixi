import { compose } from 'redux'

const passFiles = (filesArray) => Promise.all(filesArray)

const renderFiles = (files) => files.map(file=>renderFile(file).then(imgObj=>imgObj))

const renderFile = (file) => new Promise((resolves, rejects) => {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = (e) => {
    if( e.target.result ){
      let fileData = {
        file,
        fileString: e.target.result,
        name: file.name.replace(/\.[^/.]+$/, ""),
        type: file.type,
        extension: (/[.]/.exec(file.name)) ? /[^.]+$/.exec(file.name) : undefined,
        size: file.size,
        isImage: false
      }

      if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)){
        resolves(fileData)
      }else{
        let image = new Image()
        image.src = e.target.result
        image.onload = function(e) {
          resolves({
            ...fileData,
            isImage: true,
            width: this.width,
            height: this.height
          })
        }
      }
    }else{
      rejects()
    }
  }
})

const objToArray = (obj) => Object.keys(obj).map(key=> obj[key])

export const formatFiles = compose(
  passFiles,
  renderFiles,
  objToArray
)

export const imgFile = (src, size) => src.replace(/(\.[\w\d_-]+)$/i, "___"+size+"$1")
