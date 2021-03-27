defmodule Data.Users do

    # Access Functions
    defdelegate find_by_uid(id) to: Data.Access.Users

    defdelegate get_all_songs(id) to: Data.Access.Users
    defdelegate get_liked_songs(id) to: Data.Access.Users
    defdelegate get_rejected_songs(id) to: Data.Access.Users
    defdelegate get_spotify_at(id) to: Data.Access.Users
    defdelegate get_spotify_rt(id) to: Data.Access.Users

    # Mutation Functions
    defdelegate t, to: Data.Mutations.Users

    # Query Functions
end