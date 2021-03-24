defmodule Handler.Routes.Auth do
    import Plug.Conn
    import Phoenix.Controller

    use Plug.Router
    

    plug(:match)

    # Body Parser
    plug Plug.Parsers, parsers: [:json],
                       pass: ["application/json"],
                       json_decoder: Jason

    plug(:dispatch)

    # Spotify
    get "/spotify/callback" do
        _ = case Spotify.Authentication.authenticate(conn, conn.params) do
            {:ok, conn} ->
                conn |> redirect(to: "/auth/success")
            {:error, reason, conn} -> conn |> redirect(to: "/auth/failure")
        end
    end

    get "/spotify/login" do
        conn 
        |> redirect(external: Spotify.Authorization.url)
    end 

    get "/spotify/refresh" do
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