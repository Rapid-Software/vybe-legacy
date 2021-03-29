defmodule Data.Schemas.Song do
    use Ecto.Schema
    #import Ecto.Query
    import Ecto.Changeset

    schema "songs" do
        field :sid, :string
        field :type, :string
        field :pid, :string
        field :name, :string
        field :artist, :string
    end

    def edit_changeset_w(song, data, fields) do
        song
        |> cast(data, fields)
    end

end
