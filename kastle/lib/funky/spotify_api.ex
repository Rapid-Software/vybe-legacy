defmodule Spotty do

  def post(url, body, headers) do
    HTTPoison.post(url, body, headers)
  end

  def get() do

  end

  def get_client_id() do
    System.get_env("SPOTIFY_CLIENT_ID") # change to config var soon
  end

  def get_client_secret() do
    System.get_env("SPOTIFY_SECRET")
  end

  def refresh_post(url, refresh_token) do
    headers = [
      {"Content-Type", "application/x-www-form-urlencoded"}
    ]

    client_id = get_client_id()
    secret = get_client_secret()
    req_body = "grant_type=refresh_token&refresh_token=#{refresh_token}&client_id=#{client_id}&client_secret=#{secret}"

    HTTPoison.post(url, req_body, headers)
  end

  def refresh_by_id(id) do
    {:ok, u} = id |> Data.Access.Users.find_by_uid()
    {:ok, r} = refresh_post("https://accounts.spotify.com/api/token", u.spotify_rt)

    case r["body"] do
      %{"access_token" => token, "token_type" => type, "scope" => scope, "expires_in" => expires, "refresh_token" => refresh_token} ->
        Data.Mutations.Users.update_spotify_user(u.uid, token, refresh_token)
        {:ok, token}
      _ ->
        {:error} #error
    end
  end

  def refresh_by_token(token) do
    {:ok, u} = token |> Data.Access.Users.tokens_to_user()
    r = refresh_post("https://accounts.spotify.com/api/token", u.spotify_rt)

    case r.body do
      %{"access_token" => token, "token_type" => type, "scope" => scope, "expires_in" => expires, "refresh_token" => refresh_token} ->
        Data.Mutations.Users.update_spotify_user(u.uid, token, refresh_token)
        {:ok, token}
      _ ->
        {:error}
    end
  end

  def verify_access_token(access_token) do
    headers = [
      {"Authorization", "Bearer #{access_token}"},
      {"Content-Type", "application/json"},
      {"Accept", "application/json"}
    ]

    r = HTTPoison.get!("https://api.spotify/v1/me", headers)
    case r do
      %{"error" => %{"message" => message, "status" => status} } ->
        {:invalid, status, message}
      _ ->
        {:valid, r["expires_in"]}
    end
  end

  def validate_and_update_token(uid, access_token) do
    case verify_access_token(access_token) do
      {:valid, expires} ->
        nil
      {:invalid, status, message} ->
        nil
    end
  end

end
