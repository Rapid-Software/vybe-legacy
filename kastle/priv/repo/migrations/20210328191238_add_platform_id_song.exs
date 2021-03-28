defmodule Data.Repo.Migrations.AddPlatformIdSong do
  use Ecto.Migration

  def change do
    alter table("songs") do
      add :pid, :string
    end

    alter table("liked_songs") do
      add :pid, :string
      add :type, :string
    end

    alter table("rejected_songs") do
      add :pid, :string
      add :type, :string
    end
  end
end
