import { NextResponse } from "next/server"
import { following } from "@/lib/spotify"
import { createAdaptedFollowing } from "@/adapters/following"

export async function GET() {
  try {
    const response = await following()
    const { artists } = await response.json()

    // Addapted data following
    const data = createAdaptedFollowing(artists.items)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error get following" },
      { status: 500 }
    )
  }
}
