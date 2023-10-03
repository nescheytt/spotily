import {
  EndpointCurrentProfile,
  CurrentProfile,
} from "@/models/current-profile"

export function createAdaptedCurrentProfile(
  profile: EndpointCurrentProfile
): CurrentProfile {
  const totalFollowers = new Intl.NumberFormat("de-DE").format(
    profile.followers.total
  )

  const formattedCurrentProfile: CurrentProfile = {
    name: profile.display_name,
    url: profile.external_urls.spotify,
    cover: profile.images[1].url,
    followers: totalFollowers,
    country: profile.country,
    product: profile.product,
  }

  return formattedCurrentProfile
}
