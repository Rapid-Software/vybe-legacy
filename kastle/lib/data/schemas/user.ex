defmodule Data.Schemas.User do
    use Ecto.Schema
    import Ecto.Query
    import Ecto.Changeset

    schema "users" do
        field :uid, :string
        field :type, :string
        field :token, :string
        field :spotify_id, :string
        field :spotify_at, :string
        field :spotify_rt, :string
        has_many :liked_songs, Data.Schemas.Song, foreign_key: :uid, join_through: "liked_songs"
        has_many :rejected_songs, Data.Schemas.Song, foreign_key: :uid, join_through: "rejected_songs"
    end

    def edit_changeset_w(user, data, fields) do
        user
        |> cast(data, fields)
    end

end
