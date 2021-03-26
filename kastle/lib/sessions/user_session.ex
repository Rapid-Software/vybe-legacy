defmodule Sessions.UserSession do
    use GenServer

    defmodule State do
        @type t :: %__MODULE__{
            user_id: String.t(),
            account_type: String.t(),
            token: String.t()
        }

        defstruct user_id: nil,
                  account_type: nil,
                  token: nil
    end

    def start_link(%State{
        user_id: user_id,
        account_type: account_type
        token: token
    }) do
        GenServer.start_link(
            __MODULE__,
            %State{
                user_id: user_id,
                account_type: account_type,
                token: token
            },
            name: :"#{user_id}:user_session"
        )
    end

  def init(x) do
    {:ok, x}
  end

    @spec send_cast(String.t(), any) :: :ok
    def send_cast(user_id, params) do
        case GenRegistry.lookup(Onion.UserSession, user_id) do
        {:ok, session} ->
            GenServer.cast(session, params)

        err ->
            err
        end
    end

  def send_call!(user_id, params) do
    case send_call(user_id, params) do
      {:ok, x} ->
        x

      _ ->
        nil
    end
  end

  def send_call(user_id, params) do
    case GenRegistry.lookup(Onion.UserSession, user_id) do
      {:ok, session} ->
        {:ok, GenServer.call(session, params)}

      err ->
        {:error, err}
    end
  end

end