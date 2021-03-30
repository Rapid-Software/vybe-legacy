defmodule Kastle do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec, warn: false
    children = [
      {
        GenRegistry,
        worker_module: Sessions.UserSession
      },
      {Data.Repo, []},
      Plug.Cowboy.child_spec(
        scheme: :http,
        plug: Handler,
        options: [
          port: String.to_integer("4000"),
          dispatch: dispatch(),
          protocol_options: [idle_timeout: :infinity]
        ]
      )
    ]
    opts = [strategy: :one_for_one, name: Kastle.Supervisor]
    Supervisor.start_link(children, opts)
  end

  defp dispatch do
    [
      {:_,
        [
          {"/socket", Handler.SocketHandler, []},
          {:_, Plug.Cowboy.Handler, {Handler, []}}
        ]
      }
    ]
  end

end
