"use client"

import useSWR from "swr"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Profile() {
  const { data } = useSWR("api/current-profile")

  return (
    <div className="flex items-center space-x-6">
      <Avatar className="h-24 w-24">
        <AvatarImage src={data?.cover} alt={data?.name} />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>

      <div className="flex flex-col space-y-2">
        <p className="text-xl font-semibold">@{data?.name}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="secondary" className="rounded-lg py-1 font-light">
            followers: {data?.followers}
          </Badge>
        </div>
      </div>
    </div>
  )
}
