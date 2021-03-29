defmodule Data.Mutations.Users do

    alias Data.User
    alias Data.Repo

    def spotify_find_or_create(spotify_id) do

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
        %User{uid: id}
        |> Repo.delete()
    end

end
