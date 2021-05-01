defmodule Data.Repo.Migrations.AddGenreArtistId do
  use Ecto.Migration

  def change do
    alter table("liked_songs") do
      add :genre, :string
      add :artist_id, :string
    end

    alter table("rejected_songs") do
      add :genre, :string
      add :artist_id, :string
    end

    alter table("songs") do
      add :genre, :string
      add :artist_id, :string
    end
  end
end
