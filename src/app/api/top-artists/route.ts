import { NextResponse } from "next/server"
import { topArtists } from "@/lib/spotify"

export async function GET() {
  try {
    const response = await topArtists()
    const { items } = await response.json()

    const tracks = items.slice(0, 10).map((track: any) => ({
      name: track.name,
      url: track.external_urls.spotify,
      cover: track.images[1].url,
    }))

    return NextResponse.json({ tracks }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error get top artists" },
      { status: 500 }
    )
  }
}
