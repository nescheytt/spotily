import {
  EndpointCurrentProfile,
  CurrentProfile,
} from "@/models/current-profile"

export function createAdaptedCurrentProfile(
  profile: EndpointCurrentProfile
): CurrentProfile {
  const formattedCurrentProfile: CurrentProfile = {
    name: profile.display_name,
    url: profile.external_urls.spotify,
    cover: profile.images[1].url,
    followers: profile.followers.total,
    country: profile.country,
    product: profile.product,
  }

  return formattedCurrentProfile
}
