defmodule Data.Access.Songs do

  import Ecto.Query

  alias Data.Schemas.Song
  alias Data.Repo

  def find_by_sid(sid) do
    {:ok, t =
      from(s in Song,
      where:
      s.sid == ^sid,
      limit: 1
      )
      |> Repo.one()}
  end

  def find_by_pid(type, pid) do
    {:ok, t =
      from(s in Song,
      where:
      s.type == ^type and
        s.pid == ^pid,
      limit: 1
      )
      |> Repo.one()}
  end

  def find_by_type(type) do
    {:ok, t =
      from(s in Song,
      where:
      s.type == ^type
      )
      |> Repo.all()}
  end

  def find_songs_between(id, start, finish) do
    {:ok, nil}
  end

end
