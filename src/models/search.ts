export type Search = {
  albums: {
    id: string
    name: string
    url: string
    cover: string
  }[]
  artists: {
    id: string
    name: string
    url: string
    cover: string
  }[]
  tracks: {
    id: string
    name: string
    url: string
    cover: string
  }[]
}

type Image = {
  height: number
  url: string
  width: number
}

export type EndpointSearch = {
  albums: {
    href: string
    items: {
      album_type: string
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: string
        uri: string
      }[]
      available_markets: string[]
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      images: Image[]
      name: string
      release_date: string
      release_date_precision: string
      total_tracks: number
      type: string
      uri: string
    }[]
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
  }
  artists: {
    href: string
    items: {
      external_urls: {
        spotify: string
      }
      followers: { href: null; total: number }
      genres: string[]
      href: string
      id: string
      images: Image[]
      name: string
      popularity: number
      type: string
      uri: string
    }[]
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
  }
  tracks: {
    href: string
    items: {
      album: {
        album_type: string
        artists: {
          external_urls: {
            spotify: string
          }
          href: string
          id: string
          name: string
          type: string
          uri: string
        }[]
        available_markets: string[]
        external_urls: {
          spotify: string
        }
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
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: string
        uri: string
      }[]
      available_markets: string[]
      disc_number: number
      duration_ms: number
      explicit: boolean
      external_ids: { isrc: string }
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      is_local: boolean
      name: string
      popularity: number
      preview_url: string
      track_number: number
      type: string
      uri: string
    }[]
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
  }
}
