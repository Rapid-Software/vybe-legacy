defmodule Spotty do

  def post(url, body, headers) do
    HTTPoison.post(url, body, headers)
  end

  def get() do

  end

  def get_client_id() do
    System.get_env("SPOTIFY_CLIENT_ID") # change to config var soon
  end

  def verify_access_token() do

  end

end
