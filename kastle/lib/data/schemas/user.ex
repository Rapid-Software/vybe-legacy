defmodule Data.Schemas.User do
    use Ecto.Schema
    import Ecto.Query
    #import Ecto.Changeset

    schema "users" do
        field :uid, :string
        field :uid, :string
        field :spotify_at, :string
        field :spotify_rt, :string
        many_to_many :likedsongs, Data.Schemas.Song, join_through: "liked_songs"
        many_to_many :rejectedsongs, Data.Schemas.Song, join_through: "rejected_songs"
    end    

end