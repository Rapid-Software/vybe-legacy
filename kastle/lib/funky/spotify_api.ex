defmodule Spotty do

  def post(url, body, headers) do
    HTTPoison.post(url, body, headers)
  end

  def get() do

  end

  def get_client_id() do
    System.get_env("SPOTIFY_CLIENT_ID") # change to config var soon
  end

  def refresh_post(url, refresh_token) do
    headers = [
      {"Content-Type", "application/x-www-form-urlencoded"}
    ]

    client_id = get_client_id()
    req_body = "grant_type=refresh_token&refresh_token=#{refresh_token}"

    HTTPoison.post(url, req_body, headers)
  end

  def refresh(id, at, rt) do

  end

  def verify_access_token() do

  end

end
