defmodule Handler.Routes.Test do
    import Plug.Conn

    use Plug.Router

    plug(:match)
    plug(:dispatch)

    get "/test" do
        conn 
        |> send_resp(200, "gotcha")
    end

    get _ do
        conn
        |> send_resp(404, "404")
    end

    post _ do
        conn
        |> send_resp(404, "404")
    end

end