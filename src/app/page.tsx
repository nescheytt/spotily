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

          <div className="relative md:w-[350px]">
            <Input
              placeholder="What do you want to listen to?"
              value={filterValue}
              onChange={(event) => setFilterValue(event.target.value)}
              className="h-10 w-full pr-8"
            />

            <div className="absolute right-3 top-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

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
