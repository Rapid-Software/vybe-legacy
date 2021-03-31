defmodule Data.Mutations.Songs do

  def add_song(type, id, name, artist) do

  end

  def find_or_create(type, id, name, artist) do
    t = type |> Data.Access.Songs.find_by_pid(id)
  end

end
