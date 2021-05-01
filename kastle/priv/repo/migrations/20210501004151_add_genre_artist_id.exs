defmodule Data.Repo.Migrations.AddGenreArtistId do
  use Ecto.Migration

  def change do
    alter table("liked_songs") do
      add :artist_id, :string
    end

    alter table("rejected_songs") do
      add :artist_id, :string
    end

    alter table("songs") do
      add :artist_id, :string
    end
  end
end
