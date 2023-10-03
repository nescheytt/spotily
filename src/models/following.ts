export type Following = {
  name: string
  url: string
  cover: string
  id: string
  popularity: number
  followers: string
}

export type EndpointFollowing = {
  external_urls: {
    spotify: string
  }
  followers: { href: string | null; total: number }
  genres: string[]
  href: string
  id: string
  images: Images[]
  name: string
  popularity: number
  type: string
  uri: string
}

type Images = {
  url: string
  height: number
  width: number
}
