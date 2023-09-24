export type TopArtists = {
  name: string
  url: string
  cover: string
}

type Image = {
  height: number
  url: string
  width: number
}

export type EndpointTopArtists = {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: string
  uri: string
}
