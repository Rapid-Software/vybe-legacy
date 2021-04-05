defmodule Data.Access.Users do

  import Ecto.Query

  alias Data.Schemas.User
  alias Data.Repo

  def find_by_uid(id) do
    {:ok, t =
      from(u in User,
      where:
      u.uid == ^id,
      limit: 1,
      preload: [:liked_songs, :rejected_songs]
      )
      |> Repo.one()}
  end

  def tokens_to_user(token) do
    {:ok, t =
      from(u in User,
      where:
      u.token == ^token,
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
    {:ok, t} = id |> find_by_uid()

    {:ok, t.liked_songs ++ t.rejected_songs}
  end

  def get_liked_songs(id) do
    {:ok, t} = id |> find_by_uid()
    {:ok, t.liked_songs}
  end

  def get_rejected_songs(id) do
    {:ok, t} = id |> find_by_uid()
    {:ok, t.rejected_songs}
  end

  def get_spotify_at(id) do
    {:ok, t} = id |> find_by_uid()
    {:ok, t.spotify_at}
  end

  def get_spotify_rt(id) do
    {:ok, t} = id |> find_by_uid()
    {:ok, t.spotify_rt}
  end

end
