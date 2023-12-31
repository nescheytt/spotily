const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  })

  return response.json()
}

export const search = async (query) => {
  const { access_token } = await getAccessToken()

  return fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=artist%2Calbum%2Ctrack&limit=7`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )
}

export const currentProfile = async () => {
  const { access_token } = await getAccessToken()

  return fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const following = async () => {
  const { access_token } = await getAccessToken()

  return fetch("https://api.spotify.com/v1/me/following?type=artist", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const topTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const topArtists = async () => {
  const { access_token } = await getAccessToken()

  return fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
