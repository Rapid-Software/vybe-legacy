defmodule Funky do

  def token_to_creds(token) do
    {:ok, u} = token |> Data.Access.Users.tokens_to_user()

    Spotify.Credentials.new(u.spotify_at, u.spotify_rt)
  end

  def uid_to_creds(uid) do
    {:ok, u} = Data.Access.Users.find_by_uid(uid)

    Spotify.Credentials.new(u.spotify_at, u.spotify_rt)
  end

  def get_spotify_suggestion(uid, limit, genres, artists, songs, market) do
    creds = uid |> uid_to_creds()

    {:ok, r} = creds |> Spotify.Recommendation.get_recommendations(market: market, limit: limit, seed_genres: genres)
  end # make sure token is valid

  def get_random_hip_hop_song(limit) do
    creds = "2dcd97e6-9895-4107-bdf2-a6f3178a52e0" |> token_to_creds()
    {:ok, r} = creds |> Spotify.Recommendation.get_recommendations(market: "US", limit: limit, seed_genres: "hip-hop")
    IO.inspect(r)
  end

  def convert_spotify_to_song(track) do
    song = %{
      "songName" => track.name,
      "platform" => "spotify",
      "pid" => track.id,
      "image" => track.album.images[0].url,
      "artist" => track.album.artists[0].name,
      "playbackUrl" => track.preview_url
    }
  end

  def get_lib_songs_test(uid, limit) do
    {:ok, rec} = get_spotify_suggestion(uid, limit, "hip-hop", "", "", "US")

    uf_list = Enum.map(rec.tracks, fn s ->
      s |> convert_spotify_to_song()
    end)

    list = Enum.filter(uf_list, fn u ->
      u.playbackUrl != nil
    end)

    IO.inspect(list)
  end

end
