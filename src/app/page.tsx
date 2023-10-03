"use client"

import useSWR from "swr"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Profile() {
  const [filterValue, setFilterValue] = useState("")
  const { data } = useSWR(`api/search?q=${filterValue}`)

  const hasAlbums = data?.albums?.length > 0
  const hasArtists = data?.artists?.length > 0
  const hasTracks = data?.tracks?.length > 0

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Search</h2>

          <Input
            placeholder="What do you want to listen to?"
            value={filterValue}
            onChange={(event) => setFilterValue(event.target.value)}
            className="h-10 w-full md:w-[350px]"
          />
        </div>
        {/* <Separator className="my-4" /> */}

        {hasAlbums && (
          <div>
            <div className="mt-6 space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Albums</h2>
            </div>
            <Separator className="my-4" />

            <div className="my-12 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6 md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
              {data?.albums?.map((item: any) => (
                <div key={item.id} className="space-y-2">
                  <div className="overflow-hidden rounded-md">
                    <Link href={item.url} target="_blank">
                      <Image
                        src={item.cover}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="aspect-square h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="cursor-default space-y-2">
                    <h3 className="font-medium leading-normal">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasArtists && (
          <div>
            <div className="mt-6 space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Artists</h2>
            </div>
            <Separator className="my-4" />

            <div className="my-12 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6 md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
              {data?.artists?.map((item: any) => (
                <div key={item.id} className="space-y-2">
                  <div className="overflow-hidden rounded-md">
                    <Link href={item.url} target="_blank">
                      <Image
                        src={item.cover}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="aspect-square h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="cursor-default space-y-2">
                    <h3 className="font-medium leading-normal">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasTracks && (
          <div>
            <div className="mt-6 space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Tracks</h2>
            </div>
            <Separator className="my-4" />

            <div className="my-12 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6 md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
              {data?.tracks?.map((item: any) => (
                <div key={item.id} className="space-y-2">
                  <div className="overflow-hidden rounded-md">
                    <Link href={item.url} target="_blank">
                      <Image
                        src={item.cover}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="aspect-square h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="cursor-default space-y-2">
                    <h3 className="font-medium leading-normal">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
