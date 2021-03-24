defmodule Handler do
    import Plug.Conn

    use Plug.Router

    # Alias's
    alias Handler.Routes.Test
    alias Handler.Routes.Auth

    plug(:match)
    plug(:dispatch)

    # forwards
    forward("/test", to: Test)
    forward("/auth", to: Auth)

    get _ do
        conn
        |> send_resp(404, "404")
    end

    post _ do
        conn
        |> send_resp(404, "404")
    end

end