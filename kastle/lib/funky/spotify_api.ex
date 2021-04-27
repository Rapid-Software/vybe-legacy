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

  def refresh(id, at, rt) do

  end

  def verify_access_token(access_token) do
    headers = [
      {"Authorization", "Bearer #{access_token}"},
      {"Content-Type", "application/json"},
      {"Accept", "application/json"}
    ]

    r = HTTPoison.get!("https://api.spotify/v1/me", headers)
    #%{"error" => %{"message" => "The access token expired", "status" => 401}}
    case r do
      %{"error" => %{"message" => message, "status" => status} } ->
        {:invalid, status, message}
      _ ->
        {:valid}
    end
  end

end
