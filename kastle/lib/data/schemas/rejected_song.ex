defmodule Data.Schemas.RejectedSong do
  use Ecto.Schema

  schema "rejected_songs" do
    field :uqid, :string
    field :uid, :string
    field :sid, :string
    field :type, :string
    field :pid, :string
      field :artist, :string
    field :name, :string
    field :image, :string
    field :playbackurl, :string
  end

end
