export type TopTracks = {
  name: string
  url: string
  cover: string
}

export type EndpointTopTracks = {
  album: Album
  artists: Artists[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: { isrc: string }
  external_urls: { spotify: string }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

type Album = {
  album_type: string
  artists: Artists[]
  available_markets: string[]
  external_urls: { spotify: string }
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

type Artists = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

type Image = {
  height: number
  url: string
  width: number
}
