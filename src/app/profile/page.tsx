"use client"

import useSWR from "swr"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Following } from "@/models/following"

export default function Profile() {
  const { data: profile } = useSWR("api/current-profile")
  const { data: following } = useSWR("api/following")

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={profile?.cover} alt={profile?.name} />
          <AvatarFallback>NS</AvatarFallback>
        </Avatar>

        <div className="flex flex-col space-y-2">
          <p className="text-xl font-semibold">@{profile?.name}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary" className="rounded-lg py-1 font-light">
              followers: {profile?.followers}
            </Badge>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Following</h2>
        </div>
        <Separator className="my-4" />

        <p className="text-xs font-light text-muted-foreground">{`The popularity of the artist: The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.`}</p>

        <div className="my-12 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6 md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
          {following?.map((follower: Following) => (
            <div key={follower.id} className="space-y-2">
              <div className="overflow-hidden rounded-md">
                <Link href={follower.url} target="_blank">
                  <Image
                    src={follower.cover}
                    alt={follower.name}
                    width={150}
                    height={150}
                    className="aspect-square h-full w-full object-cover transition-all hover:scale-105"
                  />
                </Link>
              </div>

              <div className="cursor-default space-y-2">
                <h3 className="font-medium leading-normal">{follower.name}</h3>
                <Badge className="font-medium">
                  popularity: {follower.popularity}
                </Badge>
                <Badge variant="secondary" className="font-medium">
                  followers: {follower.followers}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
