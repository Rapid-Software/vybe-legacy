defmodule Data.Access.Users do

  import Ecto.Query

  alias Data.Schemas.User
  alias Data.Schemas.LikedSong
  alias Data.Schemas.RejectedSong
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

  def tokens_to_user(token) do
    {:ok, t =
      from(u in User,
      where:
      u.token == ^token,
      limit: 1
      )
      |> Repo.one()}
  end

  def username_to_user(username) do
    {:ok, t =
      from(u in User,
      where:
      u.username == ^username,
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
    {:ok, liked} = id |> get_liked_songs()
    {:ok, rejected} = id |> get_rejected_songs()

    {:ok, liked ++ rejected}
  end

  def get_liked_songs(id) do
    {:ok, from(l in LikedSong,
      where:
      l.uid == ^id
      ) |> Repo.all()}
  end

  def get_rejected_songs(id) do
    {:ok, from(l in RejectedSong,
      where:
      l.uid == ^id
      ) |> Repo.all()}
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
