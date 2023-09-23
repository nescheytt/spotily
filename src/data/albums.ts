export interface Album {
  name: string
  artist: string
  url: string
  cover: string
}

export interface Tracks {
  tracks: Album[]
}
