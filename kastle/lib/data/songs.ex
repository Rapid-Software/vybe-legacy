defmodule Data.Songs do

    # Access Functions
    defdelegate find_by_sid(sid), to: Data.Access.Songs
    defdelegate find_by_pid(type, pid), to: Data.Access.Songs

    defdelegate find_by_type(type), to: Data.Access.Songs #Type: Spotify/Sc/Apple
    # Mutation Functions
    defdelegate add_song(type, id), to: Data.Mutations.Songs

    defdelegate find_or_create(type, id), to: Data.Mutations.Songs #if,else this.add_song
    # Query Functions
end
