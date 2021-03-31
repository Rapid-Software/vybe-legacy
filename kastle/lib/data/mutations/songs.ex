defmodule Data.Mutations.Songs do

  def add_song(type, id, name, artist) do
    {:created, id}
  end

  def find_or_create(type, id, name, artist) do
    {_, t} = type |> Data.Access.Songs.find_by_pid(id)

    if t |> is_nil  do
      add_song(type, id, name, artist)
    else
      {:ok, t}
    end
  end

end
