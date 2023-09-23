"use client"

import { useEffect, useState } from "react"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AlbumArtwork } from "../components/album-artwork"
import { Menu } from "../components/menu"
import { PodcastEmptyPlaceholder } from "../components/podcast-empty-placeholder"
import { Sidebar } from "../components/sidebar"
import { Tracks } from "../data/albums"
import { playlists } from "../data/playlists"
import { ModeToggle } from "@/components/mode-toggle"

export default function MusicPage() {
  const [tracks, setTracks] = useState<Tracks>()
  const [artists, setArtists] = useState<Tracks>()

  useEffect(() => {
    fetch("api/top-tracks")
      .then((response) => response.json())
      .then((response) => setTracks(response))
      .catch((error) => console.log(error))

    fetch("api/top-artists")
      .then((response) => response.json())
      .then((response) => setArtists(response))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between p-4 lg:p-6">
        <Menu />
        <ModeToggle />
      </div>

      <div className="border-t bg-background">
        <div className="lg:grid lg:grid-cols-5">
          <Sidebar playlists={playlists} className="hidden lg:block" />

          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
              <Tabs defaultValue="music" className="h-full space-y-6">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="music" className="relative">
                      Music
                    </TabsTrigger>
                    <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                    <TabsTrigger value="live" disabled>
                      Live
                    </TabsTrigger>
                  </TabsList>
                  <div className="ml-auto lg:mr-4">
                    <Button>
                      <PlusCircledIcon className="mr-2 h-4 w-4" />
                      Add music
                    </Button>
                  </div>
                </div>

                <TabsContent
                  value="music"
                  className="border-none p-0 outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Top Artists
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Your top personal artists of this week.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />

                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {artists?.tracks.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[150px]"
                            aspectRatio="square"
                            width={150}
                            height={150}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>

                  <div className="mt-6 space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Top Tracks
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Your top 10 tracks of this week.
                    </p>
                  </div>
                  <Separator className="my-4" />

                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {tracks?.tracks.map((album: any) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[150px]"
                            aspectRatio="portrait"
                            width={250}
                            height={330}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent
                  value="podcasts"
                  className="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        New Episodes
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Your favorite podcasts. Updated daily.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <PodcastEmptyPlaceholder />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
