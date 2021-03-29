defmodule Data.Repo.Migrations.AddSpotifyIdUser do
  use Ecto.Migration

  def change do
    alter table("users") do
      add :spotify_id, :string
    end
  end
end
