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
                # spotify_find_or_create(id, at, rt)
                %{
                    "spotify_access_token" => %{"value" => access_token},
                    "spotify_refresh_token" => %{"value" => refresh_token}
                } = conn.resp_cookies
                u = Users.spotify_find_or_create(s.id, access_token, refresh_token)
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
