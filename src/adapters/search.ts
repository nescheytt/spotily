import { EndpointSearch, Search } from "@/models/search"

export function createAdaptedSearch(search: EndpointSearch): Search {
  // console.log(search.albums.items.map((item) => item?.images[0]?.url))

  const formattedAlbum = search?.albums?.items.map((album) => ({
    id: album.id,
    name: album.name,
    url: album.external_urls.spotify,
    cover: album?.images[0]?.url,
  }))

  const formattedArtists = search?.artists?.items.map((artist) => ({
    id: artist.id,
    name: artist.name,
    url: artist.external_urls.spotify,
    cover: artist?.images[0]?.url,
  }))

  const formattedTracks = search?.tracks?.items.map((track) => {
    return {
      id: track.id,
      name: track.name,
      url: track.external_urls.spotify,
      cover: track?.album.images[0]?.url,
    }
  })

  // console.log({ formattedAlbum })
  // console.log({ formattedArtists })
  // console.log({ formattedTracks })

  return {
    albums: formattedAlbum,
    artists: formattedArtists,
    tracks: formattedTracks,
  }
}
