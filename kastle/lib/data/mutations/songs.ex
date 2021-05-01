defmodule Data.Mutations.Songs do

  alias Data.Schemas.Song
  alias Data.Repo

  def add_song(type, pid, name, artist, artist_id, image, playbackurl, genre) do
    {_, uid} = Snowflake.next_id()

    {:ok, t} = %Song{
      sid: to_string(uid),
      type: type,
      pid: pid,
      name: name,
      artist: artist,
      artist_id: artist_id,
      image: image,
      playbackurl: playbackurl,
      genre: genre
    } |> Repo.insert()

    {:created, t}
  end

  def find_or_create(type, pid, name, artist, artist_id, image, playbackurl, genre) do
    case Data.Access.Songs.find_by_pid(type, pid) do
      {:ok, nil} ->
        add_song(type, pid, name, artist, artist_id, image, playbackurl, genre)
      {:ok, t} ->
        {:found, t}
    end
  end

end
