defmodule Data.Mutations.Users do

    #import Ecto.Query

    alias Data.Schemas.User
    alias Data.Repo

    def spotify_find_or_create(id, at, rt) do
        case Data.Access.Users.find_by_spotify_id(id) do
            {:ok, nil} ->
                create_spotify_user(id, at, rt)
            {:ok, t} ->
                {:found, t}
        end
    end

    def create_spotify_user(id, at, rt) do
    {_, uid} = Snowflake.next_id()

    {:ok, t} = %User{
        uid: to_string(uid),
        token: Ecto.UUID.generate(),
        type: "spotify",
        spotify_id: id,
        spotify_at: at,
        spotify_rt: rt
      } |> Repo.insert()

      {:created, t}
    end

    def add_liked_song(id, sid) do
        {_, uid} = Snowflake.next_id()

        #{:ok, t} = %
    end

    def add_rejected_song(id, sid) do
        {_, uid} = Snowflake.next_id()
    end

    def edit_spotify_at(id, t) do

    end

    def edit_spotify_rt(id, t) do

    end

    def delete(id) do
        t = %User{uid: id} |> Repo.delete()
        {:ok, t}
    end

end
