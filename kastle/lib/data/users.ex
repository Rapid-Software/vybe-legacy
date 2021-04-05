defmodule Data.Users do

    # Access Functions
    defdelegate find_by_uid(id), to: Data.Access.Users
    defdelegate find_by_spotify_id(spotify_id), to: Data.Access.Users

    defdelegate get_all_songs(id), to: Data.Access.Users
    defdelegate get_liked_songs(uid), to: Data.Access.Users
    defdelegate get_rejected_songs(id), to: Data.Access.Users

    defdelegate get_spotify_at(id), to: Data.Access.Users
    defdelegate get_spotify_rt(id), to: Data.Access.Users

    defdelegate tokens_to_user(token), to: Data.Access.Users
    # Mutation Functions
    defdelegate edit_spotify_at(id, t), to: Data.Mutations.Users
    defdelegate edit_spotify_rt(id, t), to: Data.Mutations.Users
    defdelegate edit_spotify_tokens(id, at, rt), to: Data.Mutations.Users

    defdelegate delete(id), to: Data.Mutations.Users

    defdelegate add_liked_song(id, sid, type, pid), to: Data.Mutations.Users
    defdelegate add_rejected_song(id, sid, type, pid), to: Data.Mutations.Users

    defdelegate spotify_find_or_create(id, at, rt), to: Data.Mutations.Users

    defdelegate create_spotify_user(id, at, rt), to: Data.Mutations.Users

    defdelegate update_spotify_user(id, at, rt), to: Data.Mutations.Users
    # Query Functions
end
