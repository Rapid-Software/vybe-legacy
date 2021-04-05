defmodule Handler.Routes.Auth do
    import Plug.Conn
    import Phoenix.Controller

    use Plug.Router

    alias Data.Users

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
                {:ok, s} = Spotify.Profile.me(conn)
                conn |> fetch_cookies()
                {access_token, refresh_token} = { conn.resp_cookies["spotify_access_token"], conn.resp_cookies["spotify_refresh_token"] }
                {_, u} = Users.spotify_find_or_create(s.id, access_token, refresh_token)
                conn |> redirect(external: "exp://vybe/success?token=#{u.token}")
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
