defmodule Data.Mutations.Songs do

  alias Data.Schemas.Song
  alias Data.Repo

  def add_song(type, id, name, artist) do
    {_, uid} = Snowflake.next_id()

    {:ok, t} = %Song{
      sid: to_string(uid),
      type: type,
      pid: id,
      name: name,
      artist: artist
    } |> Repo.insert()

    {:created, t}
  end

  def find_or_create(type, id, name, artist) do
    case Data.Access.Songs.find_by_pid(type, id) do
      {:ok, nil} ->
        add_song(type, id, name, artist)
      {:ok, t} ->
        {:found, t}
    end
  end

end
