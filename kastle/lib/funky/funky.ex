defmodule Funky do

  def get_random_spotify_song() do

  end

  def get_spotify_suggestion(limit, genres, artists, songs) do

  end

  def get_random_hip_hop_song(limit) do
    creds = "0de489a8-ba81-423f-b1c3-847508a4f85e" |> create_spotify_connection()
    {:ok, r} = creds |> Spotify.Recommendation.get_recommendations(market: "US", limit: limit, seed_genres: "hip-hop")
    IO.inspect(r)
  end

  def convert_spotify_to_song() do

  end

  def create_spotify_connection(token) do
    {:ok, u} = token |> Data.Access.Users.tokens_to_user()

    Spotify.Credentials.new(u.spotify_at, u.spotify_rt)
  end

  def refresh_spotify(uid, creds) do
    headers = [
      {""}
    ]

    body = [

    ]

  end

  def custom_spotify_post(url, header, body) do

  end

end
