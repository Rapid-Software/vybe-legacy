defmodule Handler.Routes.Auth do
    import Plug.Conn

    use Plug.Router

    plug(:match)
    plug(:dispatch)

    # Spotify
    post "spotify" do
        conn
        |> send_resp(200, "bruh")
    end

    # Soundcloud

    # Apple Music

    get _ do
        conn
        |> send_resp(404, "404")
    end

    post _ do
        conn
        |> send_resp(404, "404")
    end

end