import { EndpointTopTracks, TopTracks } from "@/models/top-tracks"

export function createAdaptedTopTracks(
  tracks: EndpointTopTracks[]
): TopTracks[] {
  const formattedTopTracks: TopTracks[] = tracks.map(
    (track: EndpointTopTracks) => ({
      name: track.name,
      artist: track.artists
        .map((artist: { name: string }) => artist.name)
        .join(", "),
      url: track.external_urls.spotify,
      cover: track.album.images[1].url,
    })
  )

  return formattedTopTracks
}
