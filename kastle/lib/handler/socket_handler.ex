defmodule Handler.SocketHandler do

    defmodule State do
        @type t :: %__MODULE__{
            awt_init: boolean(),
            user_id: String.t()
        }

        defstruct awt_init: true,
            user_id: nil
        end

        @behaviour :cowboy_websocket

        def init(request, _state) do
            state = %State{
                awt_init: true,
                user_id: nil
            }

            {:cowboy_websocket, request, state}
        end

        def websocket_init(state) do
            Process.send_after(self(), {:finish_awt}, 10_000)

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
            with {:ok, json} <- Poison.decode(json) do
                if not is_nil(state.user_id) do
                    try do
                        case json do
                            %{"op" => op, "d" => d} ->
                                handler(op, d, state)
                        end
                    rescue
                        e ->
                            IO.inspect(e)
                    end
                end
            end
        end

        # Handlers
        def handler("test", %{"test_data" => _data}, state) do
            {:ok, state}
        end

end
