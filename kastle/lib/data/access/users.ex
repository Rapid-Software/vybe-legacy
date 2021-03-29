defmodule Data.Access.Users do

  import Ecto.Query

  alias Data.Schemas.User
  alias Data.Repo

  def find_by_uid(id) do
    {:ok, t =
      from(u in User,
      where:
      u.uid == ^id,
      limit: 1
      )
      |> Repo.one()}
  end

  def find_by_spotify_id(spotify_id) do
    {:ok, t =
      from(u in User,
      where:
      u.spotify_id == ^spotify_id,
      limit: 1
      )
      |> Repo.one()}
  end

  def get_all_songs(id) do
    t = id |> find_by_uid()

    {:ok, t.liked_songs ++ t.rejected_songs}
  end

  def get_liked_songs(id) do
    t = id |> find_by_uid()
    {:ok, t.liked_songs}
  end

  def get_rejected_songs(id) do
    t = id |> find_by_uid()
    {:ok, t.rejected_songs}
  end

  def get_spotify_at(id) do
    t = id |> find_by_uid()
    {:ok, t.spotify_at}
  end

  def get_spotify_rt(id) do
    t = id |> find_by_uid()
    {:ok, t.spotify_rt}
  end

end
