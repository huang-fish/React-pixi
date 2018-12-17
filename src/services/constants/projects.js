import Immutable from "immutable"

export const PROJECTS = Immutable.fromJS({
  projects: []
})

export const PROJECT_MODEL = Immutable.fromJS({
  name: "",
  slug: "",
  thumbnail: "/images/pic_default_project_thumbnail.png"
})
