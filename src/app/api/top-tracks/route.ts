import { NextResponse } from "next/server"
import { topTracks } from "@/lib/spotify"

export async function GET() {
  try {
    const response = await topTracks()
    const { items } = await response.json()

    const tracks = items.slice(0, 10).map((track: any) => ({
      name: track.name,
      artist: track.artists
        .map((_artist: { name: any }) => _artist.name)
        .join(", "),
      url: track.external_urls.spotify,
      cover: track.album.images[1].url,
    }))

    return NextResponse.json({ tracks }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error get top tracks" },
      { status: 500 }
    )
  }
}
