defmodule Kastle.Repo do
  use Ecto.Repo,
    otp_app: :kastle,
    adapter: Ecto.Adapters.Postgres
end
