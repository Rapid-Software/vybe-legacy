defmodule Data.Songs do

    # Access Functions
    defdelegate find_by_sid(sid), to: Data.Access.Songs
    defdelegate find_by_pid(type, pid), to: Data.Access.Songs

    defdelegate find_by_type(type), to: Data.Access.Songs #Type: Spotify/Sc/Appled

    defdelegate find_songs_between(id, start, finish), to: Data.Access.Songs
    # Mutation Functions
    defdelegate add_song(type, pid, name, artist, artist_id, image, playbackurl, genre), to: Data.Mutations.Songs

    defdelegate find_or_create(type, pid, name, artist, artist_id, image, playbackurl, genre), to: Data.Mutations.Songs #if,else this.add_song
    # Query Functions
end
