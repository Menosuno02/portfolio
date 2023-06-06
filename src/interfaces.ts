export interface Project {
  title: string,
  desc: string,
  github: string,
  web: string,
  img: string,
  icon: string,
  badges: Badge[]
}

export interface Badge {
  name: string,
  color: string
}