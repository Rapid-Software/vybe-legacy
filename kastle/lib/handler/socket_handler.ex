defmodule Handler.SocketHandler do
    require Logger

    alias Sessions.UserSession

    @type state :: %__MODULE__{
            awt_init: boolean(),
            user_id: String.t(),
            gid: pid()
          }

    defstruct awt_init: true,
              user_id: nil,
              gid: nil

    @behaviour :cowboy_websocket

    def init(request, _state) do
      props = :cowboy_req.parse_qs(request)

      state = %__MODULE__{
        awt_init: true,
        user_id: nil,
        gid: nil
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
                        case data["d"] do
                           %{"token" => token} ->
                                case Data.Access.Users.tokens_to_user(token) do
                                    {_, nil} ->
                                        {:reply, {:close, 4004, "invalid authorization"}, state}
                                    {_, t} ->
                                        pid = case GenServer.start_link(UserSession, %UserSession.State{
                                            user_id: t.uid,
                                            account_type: t.type,
                                            token: token
                                        }) do
                                            {:ok, tpid} -> tpid
                                            {:error, {:already_started, tpid}} -> tpid
                                            _ -> {:reply, {:close, 4999, "internal error"}, state}
                                        end
                                        {:reply, make_socket_msg(%{"op" => "auth_good", "d" => %{"user_id" => t.uid}}), %{state | user_id: t.uid, gid: pid, awt_init: false}}
                                    _ ->
                                        {:reply, {:close, 4999, "internal error"}, state}
                                end

                            _ ->
                                {:reply, {:close, 4003, "invalid auth packet"}, state}
                        end

                _ ->
                    if not is_nil(state.user_id) do
                        try do
                            case data do
                                %{"op" => op, "d" => d} ->
                                    handler(op, d, state)
                                _ ->
                                    {:reply, {:close, 4002, "invalid packet"}, state}
                            end
                        rescue
                            e ->
                                IO.inspect(e)
                                {:reply, {:close, 4999, "internal error."}, state}
                        end
                    else
                        {:reply, {:close, 4001, "unauthorized"}, state}
                    end
            end
        end
    end

    # Handlers
    def handler("test", %{"test_data" => _data}, state) do
      {:reply, make_socket_msg(%{"op" => "test_response", "d" => "test"}), state}
    end

    def handler("heartbeat", %{}, state) do
        {:reply, make_socket_msg(%{"op" => "heartbeat_ack", "d" => %{}}), state}
    end

    def handler("get_new_songs", %{}, state) do
        songs = %{ "songs" => [
            %{
                "songName" => "Burning Bridges",
                "platform" => "spotify",
                "pid" => "some rando id",
                "image" => "https://i.scdn.co/image/ab67616d0000b27342bd0f416ad3a6c9f0f28c3e",
                "artist" => "Quadeca (ft. IDK)",
                "playbackUrl" => "https://p.scdn.co/mp3-preview/39c3bdc88f5d3044f9238245b3493cf1d2284aca?cid=774b29d4f13844c495f206cafdad9c86"
            },
            %{
                "songName" => "It's All A Game",
                "platform" => "spotify",
                "pid" => "some rando id",
                "image" => "https://i.scdn.co/image/ab67616d0000b27342bd0f416ad3a6c9f0f28c3e",
                "artist" => "Quadeca",
                "playbackUrl" => "https://p.scdn.co/mp3-preview/491d4e10bc2cae9848706dfe2bb1376bd030dd63?cid=774b29d4f13844c495f206cafdad9c86"
            },
            %{
                "songName" => "People Please",
                "platform" => "spotify",
                "pid" => "some rando id",
                "image" => "https://i.scdn.co/image/ab67616d0000b27342bd0f416ad3a6c9f0f28c3e",
                "artist" => "Quadeca (ft. Guapdad 4000)",
                "playbackUrl" => "https://p.scdn.co/mp3-preview/5e76653b1564d50fd9248df32e5d8d8f4754275a?cid=774b29d4f13844c495f206cafdad9c86"
            },
          ]
        }
        {:reply, make_socket_msg(%{"op" => "get_new_songs_done", "d" => songs}), state}
    end

    def handler("get_user_profile", %{"username" => uname}, state) do # finish
        {:ok, u} = Data.Access.Users.username_to_user(uname)

    end

    def handler("get_user_profile", %{"id" => id}, state) do # finish
        {:ok, u} = Data.Access.Users.find_by_uid(id)

    end

    def handler("get_user_wrapped", %{"id" => id}, state) do # finish

    end

    def handler("follow_user", %{"username" => uname}, state) do

    end

    def handler("unfollow_user", %{"username" => uname}, state) do

    end

    def handler("get_following", %{"username" => uname}, state) do

    end

    def handler("get_followers", %{"username" => uname}, state) do

    end

    def handler("like_song", %{"sid" => sid, "type" => type, "pid" => pid, "artist" => artist, "name" => name, "image" => image, "playbackurl" => playbackurl}, state) do
        IO.puts(name)
        {:reply, make_socket_msg(%{"op" => "liked_song", "d" => %{}}), state}
    end

    def handler("reject_song", %{"sid" => sid, "type" => type, "pid" => pid, "artist" => artist, "name" => name, "image" => image, "playbackurl" => playbackurl}, state) do
        IO.puts(name)
        {:reply, make_socket_msg(%{"op" => "rejected_song", "d" => %{}}), state}
    end

    def make_socket_msg(data) do # convert to binary later??
        {:text, data
        |> Poison.encode!()}
    end

end
