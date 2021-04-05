defmodule Data.Mutations.Users do

    #import Ecto.Query

    alias Data.Schemas.User
    alias Data.Schemas.LikedSong
    alias Data.Schemas.RejectedSong
    alias Data.Repo

    def spotify_find_or_create(id, at, rt) do
        case Data.Access.Users.find_by_spotify_id(id) do
            {:ok, nil} ->
                create_spotify_user(id, at, rt)
            {:ok, t} ->
                update_spotify_user(id, at, rt)
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

    def update_spotify_user(id, at, rt) do
        case {at, rt} do
            {at, rt} ->
                id |> edit_spotify_at(at)
                id |> edit_spotify_rt(rt)

            {at, nil} ->
                id |> edit_spotify_at(at)

            _ -> nil
        end
    end

    def add_liked_song(id, sid, type, pid) do
        {_, uid} = Snowflake.next_id()

        {:ok, t} = %LikedSong{
            uqid: uid,
            uid: id,
            sid: sid,
            type: type,
            pid: pid
        } |> Repo.insert()
    end

    def add_rejected_song(id, sid, type, pid) do
        {_, uid} = Snowflake.next_id()

        {:ok, t} = %RejectedSong{
            uqid: uid,
            uid: id,
            sid: sid,
            type: type,
            pid: pid
        } |> Repo.insert()
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
