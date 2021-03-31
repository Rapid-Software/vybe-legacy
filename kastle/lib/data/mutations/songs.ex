defmodule Data.Mutations.Songs do

  def add_song(type, id, name, artist) do
    {_, uid} = Snowflake.next_id()
    {:created, id}
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
