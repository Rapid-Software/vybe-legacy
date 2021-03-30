defmodule Handler.SocketHandler do
    require Logger

    @type state :: %__MODULE__{
            awt_init: boolean(),
            user_id: String.t()
          }

    defstruct awt_init: true,
              user_id: nil

    @behaviour :cowboy_websocket

    def init(request, _state) do
      props = :cowboy_req.parse_qs(request)

      state = %__MODULE__{
        awt_init: true,
        user_id: nil
      }

      {:cowboy_websocket, request, state}
    end

    def websocket_init(state) do
      Process.send_after(self(), {:finish_awt}, 15_000)

      {:ok, state}
    end

    def websocket_info({:EXIT, _, _}, state) do
        {:ok, state}
    end

    def websocket_info({:finish_awt}, state) do
      if state.awt_init do
        {:stop, state}
      else
        {:ok, state}
      end
    end

    def websocket_info({:kill}, state) do
      {:reply, {:close, 4003, "killed_by_server"}, state}
    end

    def websocket_handle({:text, json}, state) do
        with {:ok, data} <- Poison.decode(json) do
            case data["op"] do
                "auth" ->
                    {:reply, {:text, "auth triggered"}, %{state | awt_init: false}}

                _ ->
                    {:reply, {:text, "else triggered"}, state}
            end
        end
    end

    # Handlers
    def handler("test", %{"test_data" => _data}, state) do
      {:reply, %{"op" => "test_response", "d" => "test"}, state}
    end

end
