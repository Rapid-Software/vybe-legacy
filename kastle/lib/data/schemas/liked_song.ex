defmodule Data.Schemas.LikedSong do
  use Ecto.Schema

  schema "liked_songs" do
    field :uqid, :string
    field :uid, :string
    field :sid, :string
    field :type, :string
    field :pid, :string
  end

end
