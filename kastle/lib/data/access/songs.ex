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

  end

  def find_by_type(type) do

  end

end
