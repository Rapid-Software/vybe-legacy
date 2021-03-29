defmodule Data.Access.Users do

  import Ecto.Query

  alias Data.Schemas.User
  alias Data.Repo

  def find_by_uid(id) do

  end

  def find_by_spotify_id(spotify_id) do
    t =
      from(u in User,
      where:
      u.spotify_id == ^spotify_id,
      limit: 1
      )
      |> Repo.one()
  end

  def get_all_songs(id) do

  end

  def get_liked_songs(id) do

  end

  def get_rejected_songs(id) do

  end

  def get_spotify_at(id) do

  end

  def get_spotify_rt(id) do

  end

end
