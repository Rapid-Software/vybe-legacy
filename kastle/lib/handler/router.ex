defmodule Handler do
    import Plug.Conn

    use Plug.Router

    # Alias's
    alias Handler.Routes.Test

    plug(:match)
    plug(:dispatch)

    # forwards
    forward("/test", to: Test)

    get _ do
        conn
        |> send_resp(404, "404")
    end

    post _ do
        conn
        |> send_resp(404, "404")
    end

end