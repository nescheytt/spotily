"use client"

import useSWR from "swr"

import { AlbumArtwork } from "@/components/album-artwork"
import { Separator } from "@/components/ui/separator"

import { Album } from "@/data/albums"

export default function MusicPage() {
  const { data: tracks } = useSWR("/api/top-tracks")

  return (
    <>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Top Songs</h2>
        <p className="text-sm text-muted-foreground">
          Your top personal songs of this week.
        </p>
      </div>
      <Separator className="my-4" />

      <div className="my-6 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6 md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
        {tracks?.map((album: Album) => (
          <AlbumArtwork
            key={album.name}
            album={album}
            className="w-full max-w-[150px]"
            width={150}
            height={150}
          />
        ))}
      </div>
    </>
  )
}
