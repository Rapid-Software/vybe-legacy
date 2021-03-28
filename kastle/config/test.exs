use Mix.Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :kastle, Kastle.Repo,
  username: "postgres",
  password: "gang",
  database: "kastle_test#{System.get_env("MIX_TEST_PARTITION")}",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox


# Print only warnings and errors during test
config :logger, level: :warn
