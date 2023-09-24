import { NextResponse } from "next/server"
import { topArtists } from "@/lib/spotify"
import { createAdaptedTopArtists } from "@/adapters/top-artists"

export async function GET() {
  try {
    const response = await topArtists()
    const { items } = await response.json()

    // Addapted data top artists
    const data = createAdaptedTopArtists(items)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error get top artists" },
      { status: 500 }
    )
  }
}
