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
    end

    def edit_changeset_w(user, data, fields) do
        user
        |> cast(data, fields)
    end

end
