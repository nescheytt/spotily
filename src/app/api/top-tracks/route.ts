import { NextResponse } from "next/server"
import { topTracks } from "@/lib/spotify"
import { createAdaptedTopTracks } from "@/adapters/top-tracks"

export async function GET() {
  try {
    const response = await topTracks()
    const { items } = await response.json()

    // Addapted data top tracks
    const data = createAdaptedTopTracks(items)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error get top tracks" },
      { status: 500 }
    )
  }
}
