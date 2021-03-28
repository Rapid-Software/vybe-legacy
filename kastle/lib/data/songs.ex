defmodule Data.Songs do

    # Access Functions
    defdelegate find_by_uid(sid), to: Data.Access.Songs

    defdelegate find_by_type(type), to: Data.Access.Songs #Type: Spotify/Sc/Apple
    # Mutation Functions
    defdelegate add_song(type, id), to: Data.Mutations.Songs

    # Query Functions
end
