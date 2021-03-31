defmodule Data.Schemas.LikedSong do
  use Ecto.Schema

  schema "liked_songs" do
    field :uid, :string
    field :sid, :string
  end

end
