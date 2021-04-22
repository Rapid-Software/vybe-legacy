defmodule Spotty do

  def post(url, body, headers) do
    HTTPoison.post(url, body, headers)
  end

  def get() do

  end

  def get_client_id() do
    Application.get_env(:spotify_ex)[:client_id]
  end

  def verify_access_token() do

  end

end
