import { NextResponse } from "next/server"
import { currentProfile } from "@/lib/spotify"
import { createAdaptedCurrentProfile } from "@/adapters/current-profile"

export async function GET() {
  try {
    const response = await currentProfile()
    const items = await response.json()

    // Addapted data current profile
    const data = createAdaptedCurrentProfile(items)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error get current profile" },
      { status: 500 }
    )
  }
}
