defmodule Data.Schemas.Song do
    use Ecto.Schema
    import Ecto.Query
    #import Ecto.Changeset

    schema "songs" do
        field :sid, :string
        field :type, :string
        field :name, :string
        field :artist, :string
    end

end