defmodule Data.Schemas.RejectedSong do
  use Ecto.Schema

  schema "rejected_songs" do
    field :uid, :string
    field :sid, :string
  end

end
