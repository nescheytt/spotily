export type CurrentProfile = {
  name: string
  url: string
  cover: string
  followers: string
  country: string
  product: string
}

export type EndpointCurrentProfile = {
  display_name: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: Images[]
  type: string
  uri: string
  followers: {
    href: string | null
    total: number
  }
  country: string
  product: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  email: string
}

type Images = {
  url: string
  height: number
  width: number
}
