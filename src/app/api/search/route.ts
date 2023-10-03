import { NextResponse } from "next/server"
import { search } from "@/lib/spotify"
import { createAdaptedSearch } from "@/adapters/search"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  try {
    const response = await search(query)
    const items = await response.json()

    // Addapted data following
    const data = createAdaptedSearch(items)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error get following" },
      { status: 500 }
    )
  }
}
