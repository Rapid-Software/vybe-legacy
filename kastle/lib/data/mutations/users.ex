defmodule Data.Mutations.Users do

    #import Ecto.Query

    alias Data.Schemas.User
    alias Data.Repo

    def spotify_find_or_create(id, at, rt) do
        {_, t} = id |> Data.Access.Users.find_by_spotify_id()
    end

    def create_spotify_user(id, at, rt) do

    end

    def add_liked_song(id, sid) do

    end

    def add_rejected_song(id, sid) do

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
