defmodule Funky do

  def get_random_spotify_song() do

  end

  def get_spotify_suggestion(limit, genres, artists, songs) do

  end

  def get_random_hip_hop_song(limit) do
    creds = "2dcd97e6-9895-4107-bdf2-a6f3178a52e0" |> create_spotify_connection()
    {:ok, r} = creds |> Spotify.Recommendation.get_recommendations(market: "US", limit: limit, seed_genres: "hip-hop")
    IO.inspect(r)
  end

  def convert_spotify_to_song() do

  end

  def create_spotify_connection(token) do
    {:ok, u} = token |> Data.Access.Users.tokens_to_user()

    Spotify.Credentials.new(u.spotify_at, u.spotify_rt)
  end

  # move to spotty api lib
  def refresh_spotify(creds) do
    Spotty.refresh_post("https://accounts.spotify.com/api/token", creds.refresh_token)
  end

  def test_refresh() do
    t = "0de489a8-ba81-423f-b1c3-847508a4f85e"
    {:ok, u} = Data.Access.Users.tokens_to_user(t)

    creds = create_spotify_connection(t)

    refresh_spotify(creds)
  end

end
