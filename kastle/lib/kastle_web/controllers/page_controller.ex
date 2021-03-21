defmodule KastleWeb.PageController do
  use KastleWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
