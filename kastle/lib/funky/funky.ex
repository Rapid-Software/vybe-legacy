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

    {:ok, r} = creds |> Spotify.Recommendation.get_recommendations(market: market, limit: limit, seed_artists: artists, seed_tracks: songs)
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
      "image" => List.first(track.album["images"])["url"],
      "artist" => List.first(track.album["artists"])["name"],
      "playbackUrl" => track.preview_url,
      "artist_id" => List.first(track.album["artists"])["id"]
    }
  end

  def compare_song_db(song, db) do
    IO.inspect(song["pid"])
    IO.inspect(db.pid)
    IO.inspect(song["pid"] != db.pid)
    song["pid"] != db.pid
  end

  def get_reco_strings(songs) do
    n = round(length(songs)/2)
    {s, a} = songs |> Enum.split(n)

    sngs = Enum.join(Enum.map(s, fn x -> x.pid end), ",")
    arts = Enum.join(Enum.map(a, fn x -> x.pid end), ",")

    { sngs, arts }
  end

  def get_lib_songs_test(uid, limit) do
    {:ok, seeds} = uid |> Data.Access.Users.get_random_liked_songs(10)
    {sngs, arts} = get_reco_strings(seeds)
    IO.inspect(sngs)
    IO.inspect(arts)

    {:ok, rec} = get_spotify_suggestion(uid, limit, "", "0Y5tJX1MQlPlqiwlOH1tJY,3zz52ViyCBcplK0ftEVPSS", "", "US")

    uf_list = Enum.map(rec.tracks, fn s ->
      s |> convert_spotify_to_song()
    end)

    list = Enum.filter(uf_list, fn u ->
      u["playbackUrl"] != nil
    end)

    {:ok, history} = uid |> Data.Access.Users.get_all_songs()

    list2 = Enum.filter(list, fn u ->
      case Enum.find(history, fn h -> h.pid == u["pid"] end) do
        nil ->
          true
        _ ->
          false
      end
    end)

    final = Enum.uniq(list2)

  end

end
