defmodule Data.Repo.Migrations.AddMoreSongDetails do
  use Ecto.Migration

  def change do
    alter table("liked_songs") do
      add :image, :string
      add :playbackurl, :string
      add :artist, :string
      add :name, :string
    end

    alter table("rejected_songs") do
      add :image, :string
      add :playbackurl, :string
      add :artist, :string
      add :name, :string
    end

    alter table("songs") do
      add :image, :string
      add :playbackurl, :string
    end
  end
end
