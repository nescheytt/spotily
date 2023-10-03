import { EndpointFollowing, Following } from "@/models/following"

export function createAdaptedFollowing(
  following: EndpointFollowing[]
): Following[] {
  const formattedFollowing: Following[] = following.map(
    (follower: EndpointFollowing) => {
      const totalFollowers = new Intl.NumberFormat("de-DE").format(
        follower.followers.total
      )

      return {
        name: follower.name,
        url: follower.external_urls.spotify,
        cover: follower.images[1].url,
        id: follower.id,
        popularity: follower.popularity,
        followers: totalFollowers,
      }
    }
  )

  return formattedFollowing
}
