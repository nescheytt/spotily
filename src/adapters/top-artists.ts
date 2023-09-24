import { EndpointTopArtists, TopArtists } from "@/models/top-artists"

export function createAdaptedTopArtists(
  artists: EndpointTopArtists[]
): TopArtists[] {
  const formattedTopArtists: TopArtists[] = artists.map(
    (artist: EndpointTopArtists) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
      cover: artist.images[1].url,
    })
  )

  return formattedTopArtists
}
