import { DataTabs } from "@/components/data-tabs"
import { Menu } from "@/components/menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Sidebar } from "@/components/sidebar"
import { playlists } from "@/data/playlists"

export default function MusicPage() {
  return (
    <div>
      <div className="flex items-center justify-between p-4 lg:p-6">
        <Menu />
        <ModeToggle />
      </div>

      <div className="border-t bg-background lg:grid lg:grid-cols-5">
        <Sidebar playlists={playlists} className="hidden lg:block" />

        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">
            <DataTabs />
          </div>
        </div>
      </div>
    </div>
  )
}
