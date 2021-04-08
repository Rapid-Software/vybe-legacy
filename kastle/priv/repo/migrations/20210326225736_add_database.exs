defmodule Data.Repo.Migrations.AddDatabase do
  use Ecto.Migration

  def change do

    create table(:users) do
      add :uid, :string
      add :type, :string
      add :spotify_at, :string
      add :spotify_rt, :string
    end

    create table(:songs) do
      add :sid, :string
      add :type, :string
      add :name, :string
      add :artist, :string
    end

    create table(:liked_songs) do
      add :uqid, :string
      add :uid, :string
      add :sid, :string
    end

    create table(:rejected_songs) do
      add :uqid, :string
      add :uid, :string
      add :sid, :string
    end

  end
end
